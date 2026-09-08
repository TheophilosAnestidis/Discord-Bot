import { EmbedBuilder, PermissionFlagsBits } from "discord.js";
import crypto from "node:crypto";
import { getGuildSettings } from "../database/database.js";
import { hasPremium } from "../premium/premiumService.js";

const messageWindows = new Map();
const strikes = new Map();
const duplicateMessages = new Map();
const raidWindows = new Map();
const raidLogCooldowns = new Map();
const linkPattern = /(?:https?:\/\/|www\.)\S+/i;

function key(guildId, userId) {
    return `${guildId}:${userId}`;
}

function fingerprint(content) {
    return crypto.createHash("sha256").update(content.trim().toLowerCase()).digest("hex");
}

function isModerator(message) {
    return Boolean(
        message.member?.permissions?.has(PermissionFlagsBits.Administrator) ||
        message.member?.permissions?.has(PermissionFlagsBits.ManageMessages)
    );
}

async function sendProtectionLog(guild, settings, details) {
    const channelId = settings?.protection_log_channel_id;
    const channel = channelId ? guild.channels.cache.get(channelId) : null;
    if (!channel?.isTextBased?.()) return;

    try {
        await channel.send({
            embeds: [new EmbedBuilder()
                .setColor(details.color || 0xef4444)
                .setTitle("VaultX 〢 Protection Event")
                .setDescription(`> ${details.reason}`)
                .addFields(
                    { name: "User", value: `<@${details.userId}>`, inline: true },
                    { name: "Channel", value: `<#${details.channelId}>`, inline: true },
                    { name: "Action", value: details.action, inline: true }
                )
                .setFooter({ text: "VaultX • Pro Protection" })
                .setTimestamp()]
        });
    } catch (error) {
        console.warn("Protection log failed:", error.message);
    }
}

function addStrike(guildId, userId) {
    const userKey = key(guildId, userId);
    const current = strikes.get(userKey) || { count: 0, resetAt: Date.now() + 10 * 60 * 1000 };
    if (current.resetAt <= Date.now()) current.count = 0;
    current.count += 1;
    strikes.set(userKey, current);
    return current.count;
}

export async function handleProtectionMessage(message) {
    if (!message?.guild || message.author?.bot || !message.content?.trim()) return false;
    if (!hasPremium(message.guild.id, "protection")) return false;

    const settings = getGuildSettings(message.guild.id);
    if (!settings?.protection_enabled || isModerator(message)) return false;

    const userKey = key(message.guild.id, message.author.id);
    const now = Date.now();
    const windowMs = Math.max(3, Number(settings.protection_spam_window || 10)) * 1000;
    const limit = Math.max(3, Number(settings.protection_spam_limit || 5));
    const recent = (messageWindows.get(userKey) || []).filter(timestamp => now - timestamp < windowMs);
    recent.push(now);
    messageWindows.set(userKey, recent);

    const hasLink = Boolean(settings.protection_anti_links && linkPattern.test(message.content));
    const mentionCount = message.mentions.users.size + message.mentions.roles.size + (message.mentions.everyone ? 1 : 0);
    const hasMentionFlood = Boolean(settings.protection_anti_mentions && mentionCount >= 5);
    const messageHash = fingerprint(message.content);
    const previousDuplicate = duplicateMessages.get(userKey);
    const isDuplicate = Boolean(settings.protection_anti_duplicates && previousDuplicate?.hash === messageHash && now - previousDuplicate.createdAt < 15_000);
    duplicateMessages.set(userKey, { hash: messageHash, createdAt: now });
    const isSpam = recent.length >= limit;
    if (!hasLink && !hasMentionFlood && !isDuplicate && !isSpam) return false;

    const reasons = [];
    if (hasLink) reasons.push("blocked link");
    if (hasMentionFlood) reasons.push(`${mentionCount} mentions`);
    if (isDuplicate) reasons.push("duplicate message");
    if (isSpam) reasons.push(`${recent.length} messages in ${Math.round(windowMs / 1000)} seconds`);
    const reason = `Protection rule triggered: ${reasons.join(" • ")}.`;
    let action = "Message deleted";
    try {
        await message.delete();
    } catch (error) {
        console.warn("Protection message delete failed:", error.message);
        action = "Message could not be deleted";
    }

    if (isSpam || hasMentionFlood || isDuplicate) {
        const count = addStrike(message.guild.id, message.author.id);
        if (count >= 2 && message.member?.moderatable) {
            try {
                const timeoutMinutes = Math.min(60, 5 * count);
                await message.member.timeout(timeoutMinutes * 60 * 1000, "VaultX Pro Protection: repeated violations");
                action += ` • User timed out for ${timeoutMinutes} minutes`;
            } catch (error) {
                console.warn("Protection timeout failed:", error.message);
            }
        }
    }

    await sendProtectionLog(message.guild, settings, {
        reason,
        action,
        userId: message.author.id,
        channelId: message.channel.id
    });
    return true;
}

export async function handleProtectionJoin(member) {
    if (!member?.guild || !hasPremium(member.guild.id, "protection")) return false;
    const settings = getGuildSettings(member.guild.id);
    if (!settings?.protection_enabled || !settings.protection_anti_raid) return false;

    const accountAgeLimit = Math.max(1, Number(settings.protection_account_age_hours || 24));
    const accountAgeHours = (Date.now() - member.user.createdTimestamp) / 3600000;
    const isNewAccount = accountAgeHours < accountAgeLimit;
    const guildKey = member.guild.id;
    const now = Date.now();
    const raidWindowMs = Math.max(10, Number(settings.protection_raid_window || 20)) * 1000;
    const recentJoins = (raidWindows.get(guildKey) || []).filter(timestamp => now - timestamp < raidWindowMs);
    recentJoins.push(now);
    raidWindows.set(guildKey, recentJoins);
    const raidLimit = Math.max(3, Number(settings.protection_raid_limit || 5));
    const raidDetected = recentJoins.length >= raidLimit;
    if (!isNewAccount && !raidDetected) return false;

    let action = isNewAccount ? "Suspicious account detected" : "Join burst detected";
    const quarantineRole = settings.protection_quarantine_role_id
        ? member.guild.roles.cache.get(settings.protection_quarantine_role_id)
        : null;
    if (quarantineRole && member.manageable) {
        try {
            await member.roles.add(quarantineRole, "VaultX Pro Protection: quarantine");
            action = "Quarantine role applied";
        } catch (error) {
            console.warn("Protection quarantine failed:", error.message);
        }
    } else if (member.moderatable) {
        try {
            await member.timeout(10 * 60 * 1000, "VaultX Pro Protection: suspicious join");
            action = "User timed out for 10 minutes";
        } catch (error) {
            console.warn("Protection join timeout failed:", error.message);
        }
    }

    const logKey = `${guildKey}:raid`;
    if (!raidDetected || !raidLogCooldowns.has(logKey) || raidLogCooldowns.get(logKey) <= now) {
        raidLogCooldowns.set(logKey, now + raidWindowMs);
        await sendProtectionLog(member.guild, settings, {
            reason: raidDetected
                ? `Join burst detected: ${recentJoins.length} joins in ${Math.round(raidWindowMs / 1000)} seconds.`
                : `Account age is under ${accountAgeLimit} hours (${Math.max(0, Math.round(accountAgeHours * 10) / 10)}h).`,
            action,
            userId: member.id,
            channelId: member.guild.systemChannelId || member.id,
            color: raidDetected ? 0xef4444 : 0xf59e0b
        });
    }
    return true;
}

export function clearProtectionState() {
    messageWindows.clear();
    strikes.clear();
    duplicateMessages.clear();
    raidWindows.clear();
    raidLogCooldowns.clear();
}
