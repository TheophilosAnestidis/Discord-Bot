import { isGuildPremium } from "./database/database.js";

const OWNER_ID = (process.env.OWNER_USER_ID || process.env.BOT_OWNER_ID || "").trim();

export function isBotOwner(userId) {
    return Boolean(userId && OWNER_ID && userId === OWNER_ID);
}

export function hasPremium(guildId) {
    return Boolean(guildId && isGuildPremium(guildId));
}

export async function requirePremium(interaction, { ownerBypass = true } = {}) {
    if (!interaction?.guild) {
        await interaction.reply({ content: "❌ This feature is only available inside a server.", ephemeral: true });
        return false;
    }
    if (ownerBypass && isBotOwner(interaction.user?.id)) return true;
    if (hasPremium(interaction.guild.id)) return true;
    const payload = {
        content: "🔒 **Premium required.** This server does not have an active VaultX Premium subscription.",
        ephemeral: true
    };
    if (interaction.replied || interaction.deferred) await interaction.followUp(payload);
    else await interaction.reply(payload);
    return false;
}

export function premiumOwnerConfigured() {
    return Boolean(OWNER_ID);
}
