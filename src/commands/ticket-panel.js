import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelType
} from "discord.js";

import {
    getGuildSettings,
    getTicketPanel,
    saveTicketPanel,
    clearTicketPanel
} from "../database/database.js";

import { requirePremium, getPremium, formatPremium } from "../premium/premiumService.js";


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
        .setAuthor({ name: `${interaction.guild.name} 〢 Support`, iconURL: interaction.guild.iconURL() ?? undefined })
        .setTitle('Support Center')
        .setDescription([
            '> **Need help?** Choose a category below.',
            '',
            '• Purchase 〢 orders & payments\n• Bot Help 〢 setup & development\n• Bug Report 〢 errors & issues\n• General 〢 everything else',
            '',
            '〢 Private ticket\n〢 AI-assisted support\n〢 Staff escalation'
        ].join('\n'))
        .setColor(0x8b5cf6)
        .setFooter({ text: 'VaultX • Support Infrastructure' });

    const row =
        new ActionRowBuilder()

            .addComponents(

                new ButtonBuilder()

                    .setCustomId(
                        "ticket:create:purchase"
                    )

                    .setLabel(
                        "Purchase"
                    )

                    .setEmoji(
                        "🛒"
                    )

                    .setStyle(
                        ButtonStyle.Primary
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        "ticket:create:bot"
                    )

                    .setLabel(
                        "Bot Help"
                    )

                    .setEmoji(
                        "🤖"
                    )

                    .setStyle(
                        ButtonStyle.Primary
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        "ticket:create:bug"
                    )

                    .setLabel(
                        "Bug Report"
                    )

                    .setEmoji(
                        "🐛"
                    )

                    .setStyle(
                        ButtonStyle.Danger
                    ),


                new ButtonBuilder()

                    .setCustomId(
                        "ticket:create:general"
                    )

                    .setLabel(
                        "General"
                    )

                    .setEmoji(
                        "❓"
                    )

                    .setStyle(
                        ButtonStyle.Secondary
                    )

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
                row
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