import {
    ActionRowBuilder,
    EmbedBuilder,
    ModalBuilder,
    StringSelectMenuBuilder,
    TextInputBuilder,
    TextInputStyle,
    ChannelType,
    PermissionFlagsBits
} from "discord.js";

import {
    saveGuildSettings,
    updateGuildAISettings,
    getGuildSettings
} from "../database/database.js";


const setupMenuPrefix =
    "ticket:setup:menu:";

const configureModalPrefix =
    "ticket:setup:configure:";

const aiConfigureModalPrefix =
    "ticket:setup:ai:";

const accessModalPrefix =
    "ticket:setup:access:";

const ticketOwnerPrefix =
    "ticket-owner:";


function textInput(customId, label, placeholder, options = {}) {

    const {
        style = TextInputStyle.Short,
        maxLength = 25,
        required = true,
        value = null
    } = options;

    const input = new TextInputBuilder()
            .setCustomId(customId)
            .setLabel(label)
            .setPlaceholder(placeholder)
            .setStyle(style)
            .setRequired(required)
            .setMaxLength(maxLength);

    if (value !== null && value !== undefined && String(value).trim()) {
        input.setValue(String(value).slice(0, maxLength));
    }

    return new ActionRowBuilder().addComponents(input);

}


function getText(interaction, customId) {

    return interaction.fields
        .getTextInputValue(customId)
        .trim();

}


function getGuild(interaction, guildId) {

    return interaction.client.guilds.cache.get(guildId) ?? null;

}


function isTextChannel(channel) {

    return channel?.type === ChannelType.GuildText;

}


function isAdministrator(member) {

    return Boolean(
        member?.permissions?.has(PermissionFlagsBits.Administrator)
    );

}


function buildSetupMenu(guildId, panelChannelId) {

    return new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
            .setCustomId(`${setupMenuPrefix}${guildId}:${panelChannelId}`)
            .setPlaceholder("Choose a ticket administration action")
            .addOptions(
                {
                    label: "Configure ticket system",
                    description: "Set roles, categories, logs, and panel channel",
                    value: "configure",
                    emoji: "⚙️"
                },
                {
                    label: "Configure AI support",
                    description: "Teach the AI about this server and escalation rules",
                    value: "configure-ai",
                    emoji: "🤖"
                },
                {
                    label: "Give ticket access",
                    description: "Add a user to a ticket channel",
                    value: "add-access",
                    emoji: "➕"
                },
                {
                    label: "Remove ticket access",
                    description: "Remove a user from a ticket channel",
                    value: "remove-access",
                    emoji: "➖"
                }
            )
    );

}


export async function execute(interaction) {

    if (!interaction.guild) {

        return interaction.reply({
            content: "This command can only be used inside a server.",
            ephemeral: true
        });

    }


    const guild =
        interaction.guild;

    const embed =
        new EmbedBuilder()
            .setColor(0x0f766e)
            .setTitle("VaultX 〢 Ticket Administration")
            .setDescription(
                "Use the menu below to configure this server or manage access to individual tickets. Actions are completed privately in this DM."
            )
            .setFooter({
                text: `${guild.name} • Ticket controls`
            });

    try {

        await interaction.user.send({
            embeds: [embed],
            components: [
                buildSetupMenu(
                    guild.id,
                    interaction.channel.id
                )
            ]
        });

    } catch (error) {

        console.error("Failed to send ticket setup DM:", error);

        return interaction.reply({
            content:
                "❌ I could not send you a DM. Enable DMs from server members and run `/ticket setup` again.",
            ephemeral: true
        });

    }


    return interaction.reply({
        content: "✅ I sent the ticket administration menu to your DMs.",
        ephemeral: true
    });

}


function buildConfigureModal(guildId, panelChannelId) {

    return new ModalBuilder()
        .setCustomId(
            `${configureModalPrefix}${guildId}:${panelChannelId}`
        )
        .setTitle("Configure VaultX Tickets")
        .addComponents(
            textInput(
                "support_role_id",
                "Support role ID",
                "Example: 123456789012345678"
            ),
            textInput(
                "ticket_category_id",
                "Ticket category ID",
                "Category where tickets are created"
            ),
            textInput(
                "open_logs_channel_id",
                "Open logs channel ID",
                "Channel for ticket opening logs"
            ),
            textInput(
                "close_logs_channel_id",
                "Close logs channel ID",
                "Channel for ticket closing logs"
            ),
            textInput(
                "transcripts_channel_id",
                "Transcripts channel ID",
                "Channel for archived transcripts"
            )
        );

}

function buildAIConfigureModal(guildId) {

    const settings = getGuildSettings(guildId) || {};

    return new ModalBuilder()
        .setCustomId(`${aiConfigureModalPrefix}${guildId}`)
        .setTitle("Configure AI Support")
        .addComponents(
            textInput(
                "ai_server_context",
                "What is this server about?",
                "Community purpose, products, services or audience",
                { style: TextInputStyle.Paragraph, maxLength: 1000, required: false, value: settings.ai_server_context || "" }
            ),
            textInput(
                "ai_support_instructions",
                "How should AI help users?",
                "Tone, steps, links or server-specific support guidance",
                { style: TextInputStyle.Paragraph, maxLength: 1500, required: false, value: settings.ai_support_instructions || "" }
            ),
            textInput(
                "ai_escalation_rules",
                "When should AI call staff?",
                "Cases that must be escalated to your support team",
                { style: TextInputStyle.Paragraph, maxLength: 1000, required: false, value: settings.ai_escalation_rules || "" }
            )
        );

}


function buildAccessModal(action, guildId) {

    const adding =
        action === "add-access";

    return new ModalBuilder()
        .setCustomId(
            `${accessModalPrefix}${action}:${guildId}`
        )
        .setTitle(
            adding
                ? "Give Ticket Access"
                : "Remove Ticket Access"
        )
        .addComponents(
            textInput(
                "ticket_channel_id",
                "Ticket channel ID",
                "Example: 123456789012345678"
            ),
            textInput(
                "user_id",
                adding
                    ? "User ID to add"
                    : "User ID to remove",
                "Example: 123456789012345678"
            )
        );

}


export async function handleSetupMenu(interaction) {

    if (
        !interaction.isStringSelectMenu() ||
        !interaction.customId.startsWith(setupMenuPrefix)
    ) {

        return false;

    }

    const values =
        interaction.customId.slice(setupMenuPrefix.length).split(":");

    const guildId =
        values[0];

    const panelChannelId =
        values[1];

    const guild =
        getGuild(interaction, guildId);

    if (!guild) {

        await interaction.reply({
            content: "❌ That server is no longer available to this bot.",
            ephemeral: true
        });

        return true;

    }

    const member =
        await guild.members.fetch(interaction.user.id);

    if (!isAdministrator(member)) {

        await interaction.reply({
            content: "❌ Only server administrators can use this menu.",
            ephemeral: true
        });

        return true;

    }

    const action =
        interaction.values[0];

    if (action === "configure") {

        await interaction.showModal(
            buildConfigureModal(
                guildId,
                panelChannelId
            )
        );

        return true;

    }

    if (action === "configure-ai") {

        await interaction.showModal(
            buildAIConfigureModal(guildId)
        );

        return true;

    }

    await interaction.showModal(
        buildAccessModal(
            action,
            guildId
        )
    );

    return true;

}


async function handleConfigureModal(interaction, guildId, panelChannelId) {

    const guild =
        getGuild(interaction, guildId);

    if (!guild) {

        return interaction.reply({
            content: "❌ That server is no longer available to this bot.",
            ephemeral: true
        });

    }

    const member =
        await guild.members.fetch(interaction.user.id);

    if (!isAdministrator(member)) {

        return interaction.reply({
            content: "❌ Only server administrators can save ticket settings.",
            ephemeral: true
        });

    }

    const ids = {
        supportRoleId: getText(interaction, "support_role_id"),
        ticketCategoryId: getText(interaction, "ticket_category_id"),
        openLogsChannelId: getText(interaction, "open_logs_channel_id"),
        closeLogsChannelId: getText(interaction, "close_logs_channel_id"),
        transcriptsChannelId: getText(interaction, "transcripts_channel_id")
    };

    const supportRole =
        guild.roles.cache.get(ids.supportRoleId);

    const ticketCategory =
        guild.channels.cache.get(ids.ticketCategoryId);

    const openLogs =
        guild.channels.cache.get(ids.openLogsChannelId);

    const closeLogs =
        guild.channels.cache.get(ids.closeLogsChannelId);

    const transcripts =
        guild.channels.cache.get(ids.transcriptsChannelId);

    const invalid = [];

    if (!supportRole) invalid.push("support role");
    if (ticketCategory?.type !== ChannelType.GuildCategory) invalid.push("ticket category");
    if (!isTextChannel(openLogs)) invalid.push("open logs channel");
    if (!isTextChannel(closeLogs)) invalid.push("close logs channel");
    if (!isTextChannel(transcripts)) invalid.push("transcripts channel");

    const panelChannel =
        guild.channels.cache.get(panelChannelId);

    if (!isTextChannel(panelChannel)) invalid.push("panel channel");

    if (invalid.length > 0) {

        return interaction.reply({
            content:
                `❌ Invalid Discord ID or channel type: ${invalid.join(", ")}.`,
            ephemeral: true
        });

    }

    saveGuildSettings({
        guildId,
        supportRoleId: ids.supportRoleId,
        ticketCategoryId: ids.ticketCategoryId,
        logsChannelId: ids.openLogsChannelId,
        openLogsChannelId: ids.openLogsChannelId,
        closeLogsChannelId: ids.closeLogsChannelId,
        transcriptsChannelId: ids.transcriptsChannelId,
        panelTargetChannelId: panelChannelId
    });

    return interaction.reply({
        content:
            `✅ **${guild.name} ticket system configured.**\n\n` +
            `🎭 Support role: ${supportRole.name}\n` +
            `📁 Ticket category: ${ticketCategory.name}\n` +
            `🎫 Panel channel: #${panelChannel.name}\n` +
            `🟢 Open logs: #${openLogs.name}\n` +
            `🔴 Close logs: #${closeLogs.name}\n` +
            `📄 Transcripts: #${transcripts.name}`,
        ephemeral: true
    });

}

async function handleAIConfigureModal(interaction, guildId) {

    const guild = getGuild(interaction, guildId);

    if (!guild) {
        return interaction.reply({
            content: "❌ That server is no longer available to this bot.",
            ephemeral: true
        });
    }

    const member = await guild.members.fetch(interaction.user.id);

    if (!isAdministrator(member)) {
        return interaction.reply({
            content: "❌ Only server administrators can save AI settings.",
            ephemeral: true
        });
    }

    updateGuildAISettings(guildId, {
        aiServerContext: getText(interaction, "ai_server_context"),
        aiSupportInstructions: getText(interaction, "ai_support_instructions"),
        aiEscalationRules: getText(interaction, "ai_escalation_rules")
    });

    return interaction.reply({
        content: "✅ Advanced AI support settings saved for this server.",
        ephemeral: true
    });

}


async function handleAccessModal(interaction, action, guildId) {

    const guild =
        getGuild(interaction, guildId);

    if (!guild) {

        return interaction.reply({
            content: "❌ That server is no longer available to this bot.",
            ephemeral: true
        });

    }

    const member =
        await guild.members.fetch(interaction.user.id);

    const settings =
        (await import("../database/database.js")).getGuildSettings(guildId);

    const isStaff =
        Boolean(
            settings?.support_role_id &&
            member.roles.cache.has(settings.support_role_id)
        );

    if (!isStaff) {

        return interaction.reply({
            content: "❌ Only support staff can manage ticket access.",
            ephemeral: true
        });

    }

    const channelId =
        getText(interaction, "ticket_channel_id");

    const userId =
        getText(interaction, "user_id");

    const ticketChannel =
        guild.channels.cache.get(channelId);

    if (!isTextChannel(ticketChannel)) {

        return interaction.reply({
            content: "❌ The ticket channel ID is invalid.",
            ephemeral: true
        });

    }

    const ownerPart =
        (ticketChannel.topic ?? "")
            .split("|")
            .find(part => part.startsWith(ticketOwnerPrefix));

    const ownerId =
        ownerPart?.slice(ticketOwnerPrefix.length);

    if (!ownerId) {

        return interaction.reply({
            content: "❌ That channel is not an open VaultX ticket.",
            ephemeral: true
        });

    }

    if (userId === ownerId && action === "remove-access") {

        return interaction.reply({
            content: "❌ The ticket owner cannot lose access to their ticket.",
            ephemeral: true
        });

    }

    const user =
        await guild.members.fetch(userId).catch(() => null);

    if (!user || user.user.bot) {

        return interaction.reply({
            content: "❌ That user was not found in the server or is a bot.",
            ephemeral: true
        });

    }

    if (action === "add-access") {

        await ticketChannel.permissionOverwrites.edit(userId, {
            ViewChannel: true,
            SendMessages: true,
            ReadMessageHistory: true,
            AttachFiles: true,
            EmbedLinks: true
        });

    } else {

        await ticketChannel.permissionOverwrites.delete(userId);

    }

    return interaction.reply({
        content:
            action === "add-access"
                ? `✅ Added ${user.user.tag} to #${ticketChannel.name}.`
                : `✅ Removed ${user.user.tag} from #${ticketChannel.name}.`,
        ephemeral: true
    });

}


export async function handleSetupModal(interaction) {

    if (
        !interaction.isModalSubmit()
    ) {

        return false;

    }

    const customId =
        interaction.customId;

    if (customId.startsWith(configureModalPrefix)) {

        const values =
            customId.slice(configureModalPrefix.length).split(":");

        return handleConfigureModal(
            interaction,
            values[0],
            values[1]
        );

    }

    if (customId.startsWith(aiConfigureModalPrefix)) {

        const guildId = customId.slice(aiConfigureModalPrefix.length);

        return handleAIConfigureModal(
            interaction,
            guildId
        );

    }

    if (customId.startsWith(accessModalPrefix)) {

        const values =
            customId.slice(accessModalPrefix.length).split(":");

        return handleAccessModal(
            interaction,
            values[0],
            values[1]
        );

    }

    return false;

}
