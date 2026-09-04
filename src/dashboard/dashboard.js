import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import express from "express";

import {
    getGuildSettings,
    saveGuildSettings,
    getTicketsForGuild,
    getTicketIntelligence,
    updateTicketRecord,
    createPurchaseOrder,
    getPurchaseOrder,
    listPurchaseOrders,
    updatePurchaseOrder,
    getPurchaseStats,
    getPurchaseOrdersForUser,
    addPremiumAuditLog
} from "../database/database.js";

import { getPremium, PLANS, grantPremium } from "../premium/premiumService.js";
import { createCheckoutSession, getProducts, retrieveCheckoutSession } from "../purchase/purchaseService.js";

import {
    execute as executePanel
} from "../commands/ticket-panel.js";


const __filename =
    fileURLToPath(import.meta.url);

const __dirname =
    path.dirname(__filename);

const sessions =
    new Map();

const oauthStates =
    new Map();

const adminSessions = new Map();
const adminSessionDurationMs = 10 * 60 * 1000;

const adminPermission =
    0x8n;

const sessionDurationMs =
    10 * 60 * 1000;

const rateBuckets = new Map();
const RATE_WINDOW = 60_000;
const RATE_LIMIT = 90;

function rateLimit(request, response, next) {
    const ip = request.ip || request.socket?.remoteAddress || "unknown";
    const now = Date.now();
    let bucket = rateBuckets.get(ip);
    if (!bucket || now - bucket.startedAt > RATE_WINDOW) bucket = { startedAt: now, count: 0 };
    bucket.count += 1;
    rateBuckets.set(ip, bucket);
    if (bucket.count > RATE_LIMIT) return response.status(429).json({ error: "Too many requests. Try again shortly." });
    return next();
}

setInterval(() => {
    const now = Date.now();
    for (const [token, session] of sessions) if (now - session.createdAt > sessionDurationMs) sessions.delete(token);
    for (const [token, session] of adminSessions) if (now - session.createdAt > adminSessionDurationMs) adminSessions.delete(token);
    for (const [ip, bucket] of rateBuckets) if (now - bucket.startedAt > RATE_WINDOW * 2) rateBuckets.delete(ip);
}, 60_000).unref();


function randomToken() {

    return crypto.randomBytes(32).toString("hex");

}


function cookieValue(request, name) {

    const cookies =
        request.headers.cookie?.split(";") ?? [];

    const cookie =
        cookies
            .map(value => value.trim().split("="))
            .find(([key]) => key === name);

    return cookie
        ? decodeURIComponent(cookie[1])
        : null;

}


function setSessionCookie(response, token) {

    response.setHeader(
        "Set-Cookie",
        `vaultx_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=300`
    );

}


function clearSessionCookie(response) {

    response.setHeader(
        "Set-Cookie",
        "vaultx_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0"
    );

}


function dashboardUrl() {

    return process.env.DASHBOARD_REDIRECT_URI ||
        `http://localhost:${process.env.DASHBOARD_PORT || 3000}/auth/callback`;

}


function requireSession(request, response, next) {

    const token =
        cookieValue(request, "vaultx_session");

    const session =
        token
            ? sessions.get(token)
            : null;

    if (
        !session ||
        Date.now() - session.createdAt > sessionDurationMs
    ) {

        if (token) {
            sessions.delete(token);
        }

        return response.status(401).json({
            error: "Authentication required."
        });

    }

    request.dashboardSession = session;
    request.sessionToken = token;

    return next();

}


function getGuildForAdmin(client, session, guildId) {

    const permission =
        session.guildPermissions.get(guildId);

    if (
        !permission ||
        (BigInt(permission) & adminPermission) !== adminPermission
    ) {

        return null;

    }

    return client.guilds.cache.get(guildId) ?? null;

}


async function exchangeCode(code) {

    const body =
        new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: "authorization_code",
            code,
            redirect_uri: dashboardUrl()
        });

    const response =
        await fetch("https://discord.com/api/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body
        });

    if (!response.ok) {
        throw new Error(`Discord token exchange failed: ${response.status}`);
    }

    return response.json();

}


async function fetchDiscordUser(accessToken) {

    const response =
        await fetch("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    if (!response.ok) {
        throw new Error(`Discord user lookup failed: ${response.status}`);
    }

    return response.json();

}


async function fetchDiscordGuilds(accessToken) {

    const response =
        await fetch("https://discord.com/api/users/@me/guilds", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    if (!response.ok) {
        throw new Error(`Discord guild lookup failed: ${response.status}`);
    }

    return response.json();

}


function serializePremium(guildId) {

    const premium = getPremium(guildId);

    if (!premium) {
        return { active: false, plan: null, label: "Free", expiresAt: null, source: null, features: [] };
    }

    const plan = PLANS[premium.plan] || PLANS.starter;

    return {
        active: true,
        plan: premium.plan,
        label: plan.label,
        expiresAt: premium.expires_at,
        source: premium.source || null,
        features: plan.features
    };

}

function requireGuildPremium(request, response, guildId, feature = null) {

    const premium = getPremium(guildId);

    if (!premium) {
        return response.status(402).json({
            error: "VaultX Premium is required for this workspace.",
            code: "PREMIUM_REQUIRED",
            premium: serializePremium(guildId)
        });
    }

    if (feature) {
        const plan = PLANS[premium.plan] || PLANS.starter;
        if (!plan.features.includes("*") && !plan.features.includes(feature)) {
            return response.status(402).json({
                error: `Your ${plan.label} plan does not include ${feature.replaceAll("_", " ")}.`,
                code: "PREMIUM_FEATURE_REQUIRED",
                premium: serializePremium(guildId)
            });
        }
    }

    return null;
}

function serializeSettings(settings) {

    return settings
        ? {
            supportRoleId: settings.support_role_id,
            ticketCategoryId: settings.ticket_category_id,
            openLogsChannelId: settings.open_logs_channel_id,
            closeLogsChannelId: settings.close_logs_channel_id,
            transcriptsChannelId: settings.transcripts_channel_id,
            panelTargetChannelId: settings.panel_target_channel_id,
            aiEnabled: Boolean(settings.ai_enabled)
        }
        : null;

}


function validateConfiguration(guild, body) {

    const role =
        guild.roles.cache.get(body.supportRoleId);

    const category =
        guild.channels.cache.get(body.ticketCategoryId);

    const openLogs =
        guild.channels.cache.get(body.openLogsChannelId);

    const closeLogs =
        guild.channels.cache.get(body.closeLogsChannelId);

    const transcripts =
        guild.channels.cache.get(body.transcriptsChannelId);

    const panel =
        guild.channels.cache.get(body.panelTargetChannelId);

    const invalid = [];

    if (!role || role.managed) invalid.push("support role");
    if (category?.type !== 4) invalid.push("ticket category");
    if (openLogs?.type !== 0) invalid.push("open logs channel");
    if (closeLogs?.type !== 0) invalid.push("close logs channel");
    if (transcripts?.type !== 0) invalid.push("transcripts channel");
    if (panel?.type !== 0) invalid.push("panel channel");

    return {
        invalid,
        role,
        category,
        openLogs,
        closeLogs,
        transcripts,
        panel
    };

}



function hashAdminPassword(value) {
    return crypto.createHash("sha256").update(String(value || "")).digest("hex");
}

function adminCookieValue(request) {
    return cookieValue(request, "vaultx_admin");
}

function setAdminCookie(response, token) {
    response.setHeader("Set-Cookie",
        `vaultx_admin=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=600`);
}

function requireAdmin(request, response, next) {
    const token = adminCookieValue(request);
    const session = token ? adminSessions.get(token) : null;
    if (!session || Date.now() - session.createdAt > adminSessionDurationMs) {
        if (token) adminSessions.delete(token);
        return response.status(401).json({ error: "Admin authentication required." });
    }
    request.adminSession = session;
    return next();
}

function adminPasswordConfigured() {
    return Boolean(process.env.ADMIN_PASSWORD);
}

function shopProducts() {
    return getProducts(PLANS);
}

function requireActivityBuild(directory) {
    try {
        return fs.existsSync(path.join(directory, "index.html"));
    } catch {
        return false;
    }
}

export function startDashboard(client) {

    const required = [
        "CLIENT_ID",
        "DISCORD_CLIENT_SECRET"
    ];

    const missing =
        required.filter(name => !process.env[name]);

    if (missing.length > 0) {

        console.warn(
            `⚠️ Dashboard disabled. Missing environment variables: ${missing.join(", ")}`
        );

        return null;

    }

    const app =
        express();

    // Stripe webhook MUST receive the raw body before express.json() parses it.
    app.post("/api/stripe/webhook", express.raw({ type: "application/json" }), async (request, response) => {
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        const signature = request.headers["stripe-signature"];
        if (!secret || !signature) return response.status(400).send("Webhook is not configured.");
        try {
            const parts = Object.fromEntries(String(signature).split(",").map(x => x.split("=")));
            const timestamp = Number(parts.t);
            const signed = `${timestamp}.${request.body.toString("utf8")}`;
            const expected = crypto.createHmac("sha256", secret).update(signed).digest("hex");
            const a = Buffer.from(expected, "hex"); const b = Buffer.from(parts.v1 || "", "hex");
            if (!Number.isFinite(timestamp) || Math.abs(Date.now()/1000 - timestamp) > 300 || a.length !== b.length || !crypto.timingSafeEqual(a,b)) return response.status(400).send("Invalid signature.");
            const event = JSON.parse(request.body.toString("utf8"));
            if (["checkout.session.completed", "checkout.session.async_payment_succeeded"].includes(event.type)) {
                const session = event.data.object;
                const orderId = session.metadata?.order_id;
                const order = orderId ? getPurchaseOrder(orderId) : null;
                if (order && order.status === "pending" && session.payment_status === "paid") {
                    updatePurchaseOrder(order.id, { status: "paid", email: session.customer_details?.email || order.email });
                    if (order.guild_id && PLANS[order.plan]) grantPremium({ guildId: order.guild_id, plan: order.plan, days: order.days, actorId: "stripe-webhook", source: "stripe" });
                    if (order.guild_id) addPremiumAuditLog({ guildId: order.guild_id, action: "purchase_paid", actorId: "stripe-webhook", details: JSON.stringify({ orderId: order.id, plan: order.plan }) });
                }
            }
            if (event.type === "checkout.session.expired") {
                const orderId = event.data.object?.metadata?.order_id;
                if (orderId && getPurchaseOrder(orderId)?.status === "pending") updatePurchaseOrder(orderId, { status: "cancelled" });
            }
            return response.json({ received: true });
        } catch (error) {
            console.error("Stripe webhook error:", error);
            return response.status(400).send("Webhook processing failed.");
        }
    });

    app.use(express.json({ limit: "64kb" }));
    app.use(rateLimit);
    app.use(express.static(path.join(__dirname, "public")));


    app.get("/health", (_request, response) =>
        response.json({ ok: true, service: "vaultx-dashboard", uptime: Math.round(process.uptime()), timestamp: Date.now() })
    );

    app.get("/api/public-config", (_request, response) => {
        const dashboard = (process.env.PUBLIC_URL || `http://localhost:${process.env.DASHBOARD_PORT || 3000}`).replace(/\/$/, "");
        const activity = (process.env.ACTIVITY_URL || `http://localhost:${process.env.ACTIVITY_PORT || 5173}`).replace(/\/$/, "");
        return response.json({
            brand: "VaultX",
            dashboardUrl: dashboard,
            activityUrl: activity,
            supportUrl: process.env.SUPPORT_URL || null,
            termsUrl: process.env.TERMS_URL || null,
            privacyUrl: process.env.PRIVACY_URL || null
        });
    });

    app.get("/admin", (request, response) => {
        return response.sendFile(path.join(__dirname, "public", "admin.html"));
    });

    app.post("/api/admin/login", (request, response) => {
        if (!adminPasswordConfigured()) {
            return response.status(503).json({ error: "ADMIN_PASSWORD is not configured." });
        }
        const supplied = hashAdminPassword(request.body?.password || "");
        const expected = hashAdminPassword(process.env.ADMIN_PASSWORD);
        const a = Buffer.from(supplied, "hex");
        const b = Buffer.from(expected, "hex");
        if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
            return response.status(401).json({ error: "Invalid password." });
        }
        const token = randomToken();
        adminSessions.set(token, { createdAt: Date.now() });
        setAdminCookie(response, token);
        return response.json({ ok: true, expiresIn: 600 });
    });

    app.post("/api/admin/logout", (request, response) => {
        const token = adminCookieValue(request);
        if (token) adminSessions.delete(token);
        response.setHeader("Set-Cookie", "vaultx_admin=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0");
        return response.json({ ok: true });
    });

    app.get("/api/admin/me", requireAdmin, (request, response) =>
        response.json({ ok: true, expiresIn: Math.max(0, 600 - Math.floor((Date.now() - request.adminSession.createdAt) / 1000)) })
    );

    app.get("/api/admin/orders", requireAdmin, (request, response) =>
        response.json({ orders: listPurchaseOrders(100) })
    );

    app.get("/api/admin/overview", requireAdmin, (request, response) => {
        const stats = getPurchaseStats();
        const premiumServers = client.guilds.cache.filter(g => Boolean(getPremium(g.id))).size;
        const tickets = [...client.guilds.cache.values()].reduce((sum, g) => sum + getTicketsForGuild(g.id).length, 0);
        return response.json({ stats, premiumServers, servers: client.guilds.cache.size, tickets });
    });

    app.patch("/api/admin/orders/:id", requireAdmin, (request, response) => {
        const order = getPurchaseOrder(request.params.id);
        if (!order) return response.status(404).json({ error: "Order not found." });
        const status = request.body?.status;
        if (!["pending","paid","cancelled","fulfilled"].includes(status)) {
            return response.status(400).json({ error: "Invalid order status." });
        }
        const updated = updatePurchaseOrder(order.id, { status });
        if ((status === "paid" || status === "fulfilled") && !["paid", "fulfilled"].includes(order.status)) {
            if (order.guild_id && PLANS[order.plan]) {
                grantPremium({ guildId: order.guild_id, plan: order.plan, days: order.days, actorId: "admin", source: "purchase" });
            }
        }
        return response.json({ ok: true, order: updated });
    });

    app.get("/api/shop/products", (request, response) =>
        response.json({ products: shopProducts() })
    );
    app.get("/purchase/success", async (request, response) => {
        const { order: orderId, session_id: sessionId } = request.query;
        const order = getPurchaseOrder(orderId);
        if (!order || !sessionId || order.checkout_session_id !== sessionId) return response.status(400).send("Invalid purchase.");
        try {
            const session = await retrieveCheckoutSession(sessionId);
            if (session?.payment_status === "paid" && order.status === "pending") {
                updatePurchaseOrder(order.id, { status: "paid" });
                if (order.guild_id && PLANS[order.plan]) {
                    grantPremium({ guildId: order.guild_id, plan: order.plan, days: order.days, actorId: "stripe", source: "purchase" });
                }
            }
            return response.send(`<html><head><title>VaultX • Payment</title></head><body style="font-family:Inter,Arial;background:#07080d;color:#fff;display:grid;place-items:center;height:100vh"><div style="padding:32px;border:1px solid #252b3a;border-radius:18px;background:#10131c;text-align:center"><h1>VaultX 〢 Payment ${session?.payment_status === "paid" ? "Confirmed" : "Pending"}</h1><p>Order <b>${order.id}</b></p><p>${session?.payment_status === "paid" ? "Premium has been activated." : "Payment is still being verified."}</p><a href="/" style="color:#a78bfa">Return to dashboard</a></div></body></html>`);
        } catch (error) {
            return response.status(502).send("Payment verification failed.");
        }
    });

    app.get("/purchase/cancelled", (request, response) =>
        response.send(`<html><head><title>VaultX • Cancelled</title></head><body style="font-family:Inter,Arial;background:#07080d;color:#fff;display:grid;place-items:center;height:100vh"><div style="padding:32px;border:1px solid #252b3a;border-radius:18px;background:#10131c;text-align:center"><h1>VaultX 〢 Checkout Cancelled</h1><p>Your order was not charged.</p><a href="/" style="color:#a78bfa">Return</a></div></body></html>`)
    );


    app.post("/api/shop/checkout", async (request, response) => {
        const { plan, guildId, userId, customerEmail } = request.body || {};
        if (!PLANS[plan]) return response.status(400).json({ error: "Invalid Premium plan." });
        if (guildId) {
            const premium = getPremium(guildId);
            if (premium) return response.status(409).json({ error: "This server already has an active Premium subscription." });
        }
        try {
            const product = shopProducts().find(x => x.id === plan);
            const order = createPurchaseOrder({ plan, days: PLANS[plan].days, guildId: guildId || null, userId: userId || null, email: customerEmail || null, amount: product.price });
            const checkout = await createCheckoutSession({ order, product });
            if (checkout?.url) {
                updatePurchaseOrder(order.id, { checkout_session_id: checkout.id, checkout_url: checkout.url });
            }
            return response.json({ ok: true, orderId: order.id, url: checkout?.url || null, paymentConfigured: Boolean(checkout?.url) });
        } catch (error) {
            console.error("Checkout creation failed:", error);
            return response.status(500).json({ error: error.message || "Could not create checkout." });
        }
    });

    app.get("/auth/invite", (request, response) => {

        const params =
            new URLSearchParams({
                client_id: process.env.CLIENT_ID,
                permissions: "268438544",
                scope: "bot applications.commands",
                prompt: "consent"
            });

        return response.redirect(
            `https://discord.com/oauth2/authorize?${params}`
        );

    });

    app.get("/auth/discord", (request, response) => {

        const state =
            randomToken();

        oauthStates.set(state, Date.now() + 300000);

        const params =
            new URLSearchParams({
                client_id: process.env.CLIENT_ID,
                response_type: "code",
                redirect_uri: dashboardUrl(),
                scope: "identify guilds",
                state
            });

        response.redirect(
            `https://discord.com/oauth2/authorize?${params}`
        );

    });

    app.get("/auth/callback", async (request, response) => {

        const expiresAt =
            oauthStates.get(request.query.state);

        oauthStates.delete(request.query.state);

        if (!expiresAt || expiresAt < Date.now()) {

            return response.status(400).send("Invalid or expired login state.");

        }

        try {

            const token =
                await exchangeCode(request.query.code);

            const user =
                await fetchDiscordUser(token.access_token);

            const guilds =
                await fetchDiscordGuilds(token.access_token);

            const guildPermissions =
                new Map(
                    guilds.map(guild => [guild.id, guild.permissions])
                );

            const sessionToken =
                randomToken();

            sessions.set(sessionToken, {
                user,
                guildPermissions,
                createdAt: Date.now()
            });

            setSessionCookie(response, sessionToken);

            return response.redirect("/");

        } catch (error) {

            console.error("Dashboard Discord login failed:", error);

            return response.status(502).send("Discord login failed.");

        }

    });

    app.post("/auth/logout", (request, response) => {

        const token =
            cookieValue(request, "vaultx_session");

        sessions.delete(token);
        clearSessionCookie(response);

        return response.json({
            ok: true
        });

    });

    app.get("/api/my/orders", requireSession, (request, response) => {
        return response.json({ orders: getPurchaseOrdersForUser(request.dashboardSession.user.id, 50) });
    });

    app.get("/api/me", requireSession, (request, response) => {

        return response.json({
            id: request.dashboardSession.user.id,
            username: request.dashboardSession.user.username,
            avatar: request.dashboardSession.user.avatar
        });

    });

    app.get("/api/guilds", requireSession, (request, response) => {

        const guilds =
            [...request.dashboardSession.guildPermissions.keys()]
                .map(guildId => getGuildForAdmin(
                    client,
                    request.dashboardSession,
                    guildId
                ))
                .filter(Boolean)
                .map(guild => ({
                    id: guild.id,
                    name: guild.name,
                    icon: guild.iconURL({ size: 64 }),
                    premium: serializePremium(guild.id)
                }))
                .sort((a, b) => a.name.localeCompare(b.name));

        return response.json(guilds);

    });

    app.get("/api/guilds/:guildId", requireSession, (request, response) => {

        const guild =
            getGuildForAdmin(
                client,
                request.dashboardSession,
                request.params.guildId
            );

        if (!guild) {
            return response.status(403).json({ error: "Guild access denied." });
        }

        const roles =
            [...guild.roles.cache.values()]
                .filter(role => !role.managed && role.id !== guild.id)
                .sort((a, b) => b.position - a.position)
                .map(role => ({ id: role.id, name: role.name }));

        const channels =
            [...guild.channels.cache.values()]
                .filter(channel => [0, 4].includes(channel.type))
                .sort((a, b) => a.position - b.position)
                .map(channel => ({
                    id: channel.id,
                    name: channel.name,
                    type: channel.type,
                    parentId: channel.parentId
                }));

        return response.json({
            guild: {
                id: guild.id,
                name: guild.name,
                icon: guild.iconURL({ size: 128 })
            },
            roles,
            channels,
            settings: serializeSettings(
                getGuildSettings(guild.id)
            ),
            premium: serializePremium(guild.id)
        });

    });

    app.get("/api/guilds/:guildId/tickets", requireSession, (request, response) => {

        const guild =
            getGuildForAdmin(
                client,
                request.dashboardSession,
                request.params.guildId
            );

        if (!guild) {
            return response.status(403).json({ error: "Guild access denied." });
        }

        const premiumError = requireGuildPremium(request, response, guild.id, "tickets");
        if (premiumError) return premiumError;

        const status =
            request.query.status || null;

        const tickets =
            getTicketsForGuild(guild.id, status)
                .map(ticket => ({
                    id: ticket.id,
                    channelId: ticket.channel_id,
                    channelName: guild.channels.cache.get(ticket.channel_id)?.name ?? "deleted-channel",
                    channelUrl: guild.channels.cache.get(ticket.channel_id)?.url ?? null,
                    ownerId: ticket.owner_id,
                    ownerName: guild.members.cache.get(ticket.owner_id)?.user?.username ?? ticket.owner_id,
                    type: ticket.type,
                    status: ticket.status,
                    priority: ticket.priority,
                    claimedBy: ticket.claimed_by,
                    createdAt: ticket.created_at,
                    updatedAt: ticket.updated_at,
                    closedAt: ticket.closed_at,
                    tags: (() => { try { return JSON.parse(ticket.tags || "[]"); } catch { return []; } })(),
                    intelligence: getTicketIntelligence(String(ticket.id))
                }));

        return response.json(tickets);

    });

    app.get("/api/guilds/:guildId/stats", requireSession, (request, response) => {

        const guild = getGuildForAdmin(client, request.dashboardSession, request.params.guildId);
        if (!guild) return response.status(403).json({ error: "Guild access denied." });
        const premiumError = requireGuildPremium(request, response, guild.id, "tickets");
        if (premiumError) return premiumError;

        const all = getTicketsForGuild(guild.id);
        const open = all.filter(ticket => ["open", "claimed", "waiting", "escalated", "resolved"].includes(ticket.status));
        const claimed = all.filter(ticket => ticket.status === "claimed");
        const urgent = all.filter(ticket => ["urgent", "high"].includes(ticket.priority) && ticket.status !== "closed");
        const closed = all.filter(ticket => ticket.status === "closed");
        const responseTimes = all.filter(ticket => ticket.last_staff_message_at && ticket.created_at)
            .map(ticket => ticket.last_staff_message_at - ticket.created_at).filter(value => value >= 0);
        const avgFirstResponseMs = responseTimes.length ? responseTimes.reduce((sum, value) => sum + value, 0) / responseTimes.length : 0;

        return response.json({
            total: all.length, open: open.length, claimed: claimed.length, urgent: urgent.length, closed: closed.length,
            avgFirstResponseMs, resources: { roles: guild.roles.cache.size, channels: guild.channels.cache.size, members: guild.memberCount }
        });
    });

    app.put("/api/guilds/:guildId/settings", requireSession, (request, response) => {

        const guild =
            getGuildForAdmin(
                client,
                request.dashboardSession,
                request.params.guildId
            );

        if (!guild) {
            return response.status(403).json({ error: "Guild access denied." });
        }

        const premiumError = requireGuildPremium(request, response, guild.id, "tickets");
        if (premiumError) return premiumError;

        const body =
            request.body ?? {};

        const result =
            validateConfiguration(guild, body);

        if (result.invalid.length > 0) {
            return response.status(400).json({
                error: `Invalid configuration: ${result.invalid.join(", ")}.`
            });
        }

        try {

            const settings =
                saveGuildSettings({
                    guildId: guild.id,
                    supportRoleId: body.supportRoleId,
                    ticketCategoryId: body.ticketCategoryId,
                    logsChannelId: body.openLogsChannelId,
                    openLogsChannelId: body.openLogsChannelId,
                    closeLogsChannelId: body.closeLogsChannelId,
                    transcriptsChannelId: body.transcriptsChannelId,
                    panelTargetChannelId: body.panelTargetChannelId
                });

            return response.json({
                ok: true,
                settings: serializeSettings(settings)
            });

        } catch (error) {

            console.error("Dashboard settings save failed:", error);

            return response.status(500).json({
                error: "Could not save ticket settings."
            });

        }

    });

    app.patch("/api/guilds/:guildId/tickets/:ticketId", requireSession, (request, response) => {

        const guild = getGuildForAdmin(client, request.dashboardSession, request.params.guildId);
        if (!guild) return response.status(403).json({ error: "Guild access denied." });
        const premiumError = requireGuildPremium(request, response, guild.id, "tickets");
        if (premiumError) return premiumError;

        const ticket = getTicketsForGuild(guild.id).find(item => String(item.id) === String(request.params.ticketId));
        if (!ticket) return response.status(404).json({ error: "Ticket not found." });

        const body = request.body ?? {};
        const changes = {};
        if (body.priority !== undefined) {
            if (!["low", "normal", "high", "urgent"].includes(body.priority)) return response.status(400).json({ error: "Invalid priority." });
            changes.priority = body.priority;
        }
        if (body.status !== undefined) {
            if (!["open", "claimed", "waiting", "escalated", "resolved", "closed"].includes(body.status)) return response.status(400).json({ error: "Invalid status." });
            changes.status = body.status;
            if (body.status === "closed") changes.closed_at = Date.now();
        }
        if (!Object.keys(changes).length) return response.status(400).json({ error: "No supported ticket changes supplied." });
        const updated = updateTicketRecord(ticket.channel_id, changes);
        return response.json({ ok: true, ticket: updated });
    });

    app.post("/api/guilds/:guildId/panel", requireSession, async (request, response) => {

        const guild =
            getGuildForAdmin(
                client,
                request.dashboardSession,
                request.params.guildId
            );

        if (!guild) {
            return response.status(403).json({ error: "Guild access denied." });
        }

        const premiumError = requireGuildPremium(request, response, guild.id, "tickets");
        if (premiumError) return premiumError;

        const settings =
            getGuildSettings(guild.id);

        if (!settings) {
            return response.status(400).json({
                error: "Configure the ticket system before sending a panel."
            });
        }

        const panelChannel =
            guild.channels.cache.get(settings.panel_target_channel_id);

        const interaction = {
            guild,
            channel: panelChannel,
            reply: async payload => payload
        };

        try {

            const result =
                await executePanel(interaction);

            return response.json({
                ok: true,
                message: result?.content ?? "Ticket panel sent successfully."
            });

        } catch (error) {

            console.error("Dashboard panel send failed:", error);

            return response.status(500).json({
                error:
                    `Could not send the ticket panel: ${error?.message ?? "unknown error"}`
            });

        }

    });

    const port =
        Number(process.env.DASHBOARD_PORT || 3000);

    const server =
        app.listen(port, () => {
            console.log(`🌐 VaultX Dashboard listening on http://localhost:${port}`);
        });

    return server;

}
