import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from "discord.js";

import {
    getGuildSettings,
    getTicketPanel,
    saveTicketPanel,
    clearTicketPanel
} from "../database/database.js";

import { requirePremium, getPremium, formatPremium } from "../premium/premiumService.js";

const ticketIntakePrefix = "ticket:intake:";

export function getTicketIntakeType(customId) {
    if (!String(customId || "").startsWith(ticketIntakePrefix)) return null;
    const type = String(customId).slice(ticketIntakePrefix.length);
    return ["purchase", "bot", "bug", "general"].includes(type) ? type : null;
}

export function buildTicketIntakeModal(type) {
    if (!getTicketIntakeType(`${ticketIntakePrefix}${type}`)) return null;

    return new ModalBuilder()
        .setCustomId(`${ticketIntakePrefix}${type}`)
        .setTitle("Tell us about your request")
        .addComponents(
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                    .setCustomId("ticket_issue")
                    .setLabel("What do you need help with?")
                    .setStyle(TextInputStyle.Paragraph)
                    .setPlaceholder("Describe the problem, goal or error clearly")
                    .setRequired(true)
                    .setMaxLength(1500)
            ),
            new ActionRowBuilder().addComponents(
                new TextInputBuilder()
                    .setCustomId("ticket_attempted")
                    .setLabel("What have you already tried?")
                    .setStyle(TextInputStyle.Paragraph)
                    .setPlaceholder("Optional: steps, error messages or relevant details")
                    .setRequired(false)
                    .setMaxLength(1000)
            )
        );
}

export async function handleTicketPanelButton(interaction) {
    if (!interaction.isButton() || !interaction.customId.startsWith("ticket:panel:")) return false;

    const action = interaction.customId.slice("ticket:panel:".length);
    const settings = getGuildSettings(interaction.guildId) || {};
    const supportRole = interaction.guild?.roles.cache.get(settings.support_role_id);

    const responses = {
        guide: {
            title: "What happens next",
            description: [
                "1. Choose the category that matches your request.",
                "2. Describe the problem and what you already tried.",
                "3. AI support starts first and staff can take over whenever needed."
            ].join("\n")
        },
        safety: {
            title: "Privacy and safety",
            description: "Never share passwords, Discord tokens, API keys, private keys or payment details. A staff member will ask for safe diagnostic information only."
        },
        status: {
            title: "Support status",
            description: [
                `AI assistance 〢 **${settings.ai_enabled ? "Online" : "Offline"}**`,
                `Support team 〢 ${supportRole ? `@${supportRole.name}` : "Available through tickets"}`,
                "Response 〢 Start a ticket and include as much detail as possible."
            ].join("\n")
        }
    };

    const response = responses[action];
    if (!response) return false;

    await interaction.reply({
        embeds: [new EmbedBuilder()
            .setColor(action === "safety" ? 0xf59e0b : action === "status" ? 0x14b8a6 : 0x3b82f6)
            .setAuthor({ name: `${interaction.guild?.name || "Support"} 〢 Support HQ`, iconURL: interaction.guild?.iconURL() || undefined })
            .setTitle(response.title)
            .setDescription(response.description)
            .setFooter({ text: "Private support • AI-assisted • Staff escalation" })],
        ephemeral: true
    });

    return true;
}


const data =
    new SlashCommandBuilder()

        .setName("ticket-panel")

        .setDescription(
            "[ADMIN] • Send the VaultX ticket panel"
        )

        .setDefaultMemberPermissions(
            PermissionFlagsBits.Administrator
        );


export async function execute(
    interaction
) {

    if (!interaction.guild) {

        return interaction.reply({

            content:
                "❌ This command can only be used inside a server.",

            ephemeral: true

        });

    }


    const guildId =
        interaction.guild.id;

    if (!(await requirePremium(interaction, "tickets"))) return;

    const premium = getPremium(guildId);


    /*
    |--------------------------------------------------------------------------
    | CHECK SETUP
    |--------------------------------------------------------------------------
    */

    const settings =
        getGuildSettings(
            guildId
        );


    if (!settings) {

        return interaction.reply({

            content:
                "❌ The ticket system has not been configured yet.\n\n" +
                "Use `/ticket setup` first.",

            ephemeral: true

        });

    }


    /*
    |--------------------------------------------------------------------------
    | CHECK REQUIRED SETTINGS
    |--------------------------------------------------------------------------
    */

    if (
        !settings.support_role_id ||
        !settings.ticket_category_id
    ) {

        return interaction.reply({

            content:
                "❌ The ticket system setup is incomplete.\n\n" +
                "Use `/ticket setup` again.",

            ephemeral: true

        });

    }


    /*
    |--------------------------------------------------------------------------
    | CHECK EXISTING PANEL
    |--------------------------------------------------------------------------
    */

    const existingPanel =
        getTicketPanel(
            guildId
        );


    if (
        existingPanel?.ticket_panel_channel_id &&
        existingPanel?.ticket_panel_message_id
    ) {

        const oldChannel =
            interaction.guild.channels.cache.get(
                existingPanel.ticket_panel_channel_id
            );


        if (oldChannel) {

            try {

                const oldMessage =
                    await oldChannel.messages.fetch(
                        existingPanel.ticket_panel_message_id
                    );


                if (oldMessage) {

                    return interaction.reply({

                        content:
                            "⚠️ **A ticket panel already exists.**\n\n" +
                            `🎫 ${oldMessage.url}\n\n` +
                            "Use `/ticket disable` to completely reset the ticket system before creating a new panel.",

                        ephemeral: true

                    });

                }

            } catch {

                /*
                |--------------------------------------------------------------------------
                | OLD MESSAGE DOES NOT EXIST
                |--------------------------------------------------------------------------
                */

                clearTicketPanel(
                    guildId
                );

            }

        } else {

            clearTicketPanel(
                guildId
            );

        }

    }


    /*
    |--------------------------------------------------------------------------
    | EMBED
    |--------------------------------------------------------------------------
    */

    const panelChannel =
        interaction.guild.channels.cache.get(
            settings.panel_target_channel_id
        ) ?? interaction.channel;


    if (!panelChannel || panelChannel.type !== ChannelType.GuildText) {

        return interaction.reply({
            content:
                "❌ The configured panel channel is missing or is not a text channel. Run `/ticket setup` again.",
            ephemeral: true
        });

    }


    const embed = new EmbedBuilder()
        .setAuthor({ name: `${interaction.guild.name} 〢 Support HQ`, iconURL: interaction.guild.iconURL() ?? undefined })
        .setTitle('Support HQ 〢 We are ready to help')
        .setDescription([
            '> **Choose the lane that matches your request.**'
        ].join('\n'))
        .addFields(
            { name: '01 〢 Choose a category', value: 'Purchase, development, bug or general support.', inline: true },
            { name: '02 〢 Give context', value: 'Share what happened and what you already tried.', inline: true },
            { name: '03 〢 Get resolution', value: 'AI guidance first, with staff escalation available.', inline: true },
           /* { name: 'Privacy first', value: 'Never share passwords, tokens, API keys or payment details.', inline: false }*/
        )
        .setColor(0x14b8a6)
        .setThumbnail(interaction.guild.iconURL({ size: 256 }) ?? undefined)
        .setFooter({ text: `${interaction.guild.name} • Private support • AI-assisted` })
        .setTimestamp();

    const categoryRow =
        new ActionRowBuilder()

            .addComponents(

                new ButtonBuilder()

                    .setCustomId(
                        "ticket:intake:purchase"
                    )

                    .setLabel("Purchase help")

                    .setStyle(
                        ButtonStyle.Primary
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        "ticket:intake:bot"
                    )

                    .setLabel("Bot & development")

                    .setStyle(
                        ButtonStyle.Primary
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        "ticket:intake:bug"
                    )

                    .setLabel("Report a bug")

                    .setStyle(
                        ButtonStyle.Danger
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        "ticket:intake:general"
                    )

                    .setLabel("General support")

                    .setStyle(
                        ButtonStyle.Secondary
                    )

            );

    const utilityRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId("ticket:panel:guide")
            .setLabel("How it works")
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId("ticket:panel:safety")
            .setLabel("Privacy & safety")
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId("ticket:panel:status")
            .setLabel("Support status")
            .setStyle(ButtonStyle.Success)
    );


    /*
    |--------------------------------------------------------------------------
    | SEND PANEL
    |--------------------------------------------------------------------------
    */

    const message =
        await panelChannel.send({

            embeds: [
                embed
            ],

            components: [
                categoryRow,
                utilityRow
            ]

        });


    /*
    |--------------------------------------------------------------------------
    | SAVE PANEL IDS
    |--------------------------------------------------------------------------
    */

    const saved =
        saveTicketPanel(

            guildId,

            panelChannel.id,

            message.id

        );


    if (!saved) {

        /*
        |--------------------------------------------------------------------------
        | DATABASE SAVE FAILED
        |--------------------------------------------------------------------------
        */

        try {

            await message.delete();

        } catch {}

        return interaction.reply({

            content:
                "❌ Failed to save the ticket panel to the database.",

            ephemeral: true

        });

    }


    /*
    |--------------------------------------------------------------------------
    | SUCCESS
    |--------------------------------------------------------------------------
    */

    await interaction.reply({

        content:
            "✅ **Ticket panel sent successfully.**\n\n" +
            `🎫 ${message.url}`,

        ephemeral: true

    });

}