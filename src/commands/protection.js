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
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("raid-limit")
        .setDescription("Set joins required to trigger raid mode")
        .addIntegerOption(option => option
            .setName("joins")
            .setDescription("Joins in the raid window")
            .setMinValue(3)
            .setMaxValue(50)
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("account-age")
        .setDescription("Set the minimum account age for new-member checks")
        .addIntegerOption(option => option
            .setName("hours")
            .setDescription("Account age in hours")
            .setMinValue(1)
            .setMaxValue(720)
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("quarantine-role")
        .setDescription("Set a role for suspicious new members")
        .addRoleOption(option => option
            .setName("role")
            .setDescription("Role applied during quarantine")
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("anti-links")
        .setDescription("Enable or disable link protection")
        .addBooleanOption(option => option
            .setName("enabled")
            .setDescription("Whether this rule is active")
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("anti-duplicates")
        .setDescription("Enable or disable duplicate message protection")
        .addBooleanOption(option => option
            .setName("enabled")
            .setDescription("Whether this rule is active")
            .setRequired(true)))
    .addSubcommand(subcommand => subcommand
        .setName("anti-mentions")
        .setDescription("Enable or disable mention flood protection")
        .addBooleanOption(option => option
            .setName("enabled")
            .setDescription("Whether this rule is active")
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
        return interaction.reply({ embeds: [embed("Protection Status", `> Status 〢 **${state}**\n> Anti-spam 〢 **${settings.protection_spam_limit} messages / ${settings.protection_spam_window}s**\n> Anti-links 〢 **${settings.protection_anti_links ? "Enabled" : "Disabled"}**\n> Duplicate messages 〢 **${settings.protection_anti_duplicates ? "Enabled" : "Disabled"}**\n> Mention flood 〢 **${settings.protection_anti_mentions ? "Enabled" : "Disabled"}**\n> Anti-raid 〢 **${settings.protection_anti_raid ? "Enabled" : "Disabled"}**\n> Raid threshold 〢 **${settings.protection_raid_limit} joins / ${settings.protection_raid_window}s**\n> Account age 〢 **${settings.protection_account_age_hours} hours**\n> Quarantine role 〢 ${settings.protection_quarantine_role_id ? `<@&${settings.protection_quarantine_role_id}>` : "Not configured"}\n> Log channel 〢 ${settings.protection_log_channel_id ? `<#${settings.protection_log_channel_id}>` : "Not configured"}`)], ephemeral: true });
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

    if (subcommand === "raid-limit") {
        const joins = interaction.options.getInteger("joins");
        updateProtectionSettings(interaction.guild.id, { protection_raid_limit: joins });
        return interaction.reply({ embeds: [embed("Raid Threshold Updated", `> Raid mode triggers after **${joins} joins** in **${settings.protection_raid_window} seconds**.`)], ephemeral: true });
    }

    if (subcommand === "account-age") {
        const hours = interaction.options.getInteger("hours");
        updateProtectionSettings(interaction.guild.id, { protection_account_age_hours: hours });
        return interaction.reply({ embeds: [embed("Account Age Updated", `> Accounts younger than **${hours} hours** will be reviewed.`)], ephemeral: true });
    }

    if (subcommand === "quarantine-role") {
        const role = interaction.options.getRole("role");
        updateProtectionSettings(interaction.guild.id, { protection_quarantine_role_id: role.id });
        return interaction.reply({ embeds: [embed("Quarantine Role Updated", `> Suspicious members will receive ${role}.`)], ephemeral: true });
    }

    if (["anti-links", "anti-duplicates", "anti-mentions"].includes(subcommand)) {
        const enabled = interaction.options.getBoolean("enabled");
        const setting = {
            "anti-links": "protection_anti_links",
            "anti-duplicates": "protection_anti_duplicates",
            "anti-mentions": "protection_anti_mentions"
        }[subcommand];
        updateProtectionSettings(interaction.guild.id, { [setting]: enabled ? 1 : 0 });
        return interaction.reply({ embeds: [embed("Rule Updated", `> ${subcommand.replaceAll("-", " ")} 〢 **${enabled ? "Enabled" : "Disabled"}**`)], ephemeral: true });
    }

    const messages = interaction.options.getInteger("messages");
    updateProtectionSettings(interaction.guild.id, { protection_spam_limit: messages });
    return interaction.reply({ embeds: [embed("Spam Limit Updated", `> Threshold 〢 **${messages} messages**\n> Window 〢 **${settings.protection_spam_window} seconds**`)], ephemeral: true });
}
