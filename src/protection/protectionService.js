import { EmbedBuilder, PermissionFlagsBits } from "discord.js";
import { getGuildSettings } from "../database/database.js";
import { hasPremium } from "../premium/premiumService.js";

const messageWindows = new Map();
const strikes = new Map();
const linkPattern = /(?:https?:\/\/|www\.)\S+/i;

function key(guildId, userId) {
    return `${guildId}:${userId}`;
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
    const isSpam = recent.length >= limit;
    if (!hasLink && !isSpam) return false;

    const reason = hasLink ? "Blocked link in a protected channel." : `Spam threshold exceeded: ${recent.length} messages in ${Math.round(windowMs / 1000)} seconds.`;
    let action = "Message deleted";
    try {
        await message.delete();
    } catch (error) {
        console.warn("Protection message delete failed:", error.message);
        action = "Message could not be deleted";
    }

    if (isSpam) {
        const count = addStrike(message.guild.id, message.author.id);
        if (count >= 2 && message.member?.moderatable) {
            try {
                await message.member.timeout(10 * 60 * 1000, "VaultX Pro Protection: repeated spam");
                action += " • User timed out for 10 minutes";
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

    const accountAgeHours = (Date.now() - member.user.createdTimestamp) / 3600000;
    if (accountAgeHours >= 24) return false;

    let action = "Suspicious account detected";
    if (member.moderatable) {
        try {
            await member.timeout(10 * 60 * 1000, "VaultX Pro Protection: new account");
            action = "User timed out for 10 minutes";
        } catch (error) {
            console.warn("Protection join timeout failed:", error.message);
        }
    }

    await sendProtectionLog(member.guild, settings, {
        reason: `Account age is under 24 hours (${Math.max(0, Math.round(accountAgeHours * 10) / 10)}h).`,
        action,
        userId: member.id,
        channelId: settings.protection_log_channel_id || member.guild.systemChannelId || member.guild.id,
        color: 0xf59e0b
    });
    return true;
}

export function clearProtectionState() {
    messageWindows.clear();
    strikes.clear();
}
