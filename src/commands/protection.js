import {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
    ChannelType
} from "discord.js";
import { getGuildSettings, updateProtectionSettings } from "../database/database.js";
import { requirePremium } from "../premium/premiumService.js";

export const data = new SlashCommandBuilder()
    .setName("protection")
    .setDescription("[PRO] Configure advanced server protection")
    .addSubcommand(subcommand => subcommand
        .setName("status")
        .setDescription("Show the current protection configuration"))
    .addSubcommand(subcommand => subcommand
        .setName("enable")
        .setDescription("Enable Pro protection"))
    .addSubcommand(subcommand => subcommand
        .setName("disable")
        .setDescription("Disable Pro protection"))
    .addSubcommand(subcommand => subcommand
        .setName("log-channel")
        .setDescription("Set the protection log channel")
        .addChannelOption(option => option
            .setName("channel")
            .setDescription("Channel where protection events are logged")
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("spam-limit")
        .setDescription("Set messages allowed during the spam window")
        .addIntegerOption(option => option
            .setName("messages")
            .setDescription("Messages allowed in 3-60 seconds")
            .setMinValue(3)
            .setMaxValue(20)
            .setRequired(true)));

function embed(title, description, color = 0x8b5cf6) {
    return new EmbedBuilder()
        .setColor(color)
        .setTitle(`VaultX 〢 ${title}`)
        .setDescription(description)
        .setFooter({ text: "VaultX • Pro Protection" })
        .setTimestamp();
}

export async function execute(interaction) {
    if (!interaction.guild) return interaction.reply({ content: "This command can only be used inside a server.", ephemeral: true });
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
        return interaction.reply({ content: "Only server administrators can configure protection.", ephemeral: true });
    }
    if (!(await requirePremium(interaction, "protection"))) return;

    const settings = getGuildSettings(interaction.guild.id);
    if (!settings) return interaction.reply({ content: "Run `/ticket setup` once before configuring protection.", ephemeral: true });

    const subcommand = interaction.options.getSubcommand();
    if (subcommand === "status") {
        const state = settings.protection_enabled ? "Enabled" : "Disabled";
        return interaction.reply({ embeds: [embed("Protection Status", `> Status 〢 **${state}**\n> Anti-spam 〢 **${settings.protection_spam_limit} messages / ${settings.protection_spam_window}s**\n> Anti-links 〢 **${settings.protection_anti_links ? "Enabled" : "Disabled"}**\n> Anti-raid 〢 **${settings.protection_anti_raid ? "Enabled" : "Disabled"}**\n> Log channel 〢 ${settings.protection_log_channel_id ? `<#${settings.protection_log_channel_id}>` : "Not configured"}`)], ephemeral: true });
    }

    if (subcommand === "enable") {
        updateProtectionSettings(interaction.guild.id, { protection_enabled: 1 });
        return interaction.reply({ embeds: [embed("Protection Enabled", "> Advanced protection is now active for this server.\n> Spam, links and suspicious new accounts will be monitored.", 0x22c55e)], ephemeral: true });
    }

    if (subcommand === "disable") {
        updateProtectionSettings(interaction.guild.id, { protection_enabled: 0 });
        return interaction.reply({ embeds: [embed("Protection Disabled", "> Advanced protection is currently inactive for this server.", 0xef4444)], ephemeral: true });
    }

    if (subcommand === "log-channel") {
        const channel = interaction.options.getChannel("channel");
        updateProtectionSettings(interaction.guild.id, { protection_log_channel_id: channel.id });
        return interaction.reply({ embeds: [embed("Log Channel Updated", `> Protection events will be sent to ${channel}.`)], ephemeral: true });
    }

    const messages = interaction.options.getInteger("messages");
    updateProtectionSettings(interaction.guild.id, { protection_spam_limit: messages });
    return interaction.reply({ embeds: [embed("Spam Limit Updated", `> Threshold 〢 **${messages} messages**\n> Window 〢 **${settings.protection_spam_window} seconds**`)], ephemeral: true });
}
