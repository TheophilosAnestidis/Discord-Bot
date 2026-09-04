import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder
} from "discord.js";

import {
    getGuildSettings,
    getTicketPanel,
    disableTicketSystem
} from "../database/database.js";


const data =
    new SlashCommandBuilder()

        .setName("ticket-disable")

        .setDescription(
            "[ADMIN] • Completely disable and reset the VaultX ticket system"
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


    const guild =
        interaction.guild;


    const guildId =
        guild.id;


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
                "⚠️ **The ticket system is already disabled.**\n\n" +
                "There is no ticket setup saved for this server.",

            ephemeral: true

        });

    }


    /*
    |--------------------------------------------------------------------------
    | GET PANEL
    |--------------------------------------------------------------------------
    */

    const panel =
        getTicketPanel(
            guildId
        );


    let panelDeleted =
        false;


    /*
    |--------------------------------------------------------------------------
    | DELETE PANEL MESSAGE
    |--------------------------------------------------------------------------
    */

    if (
        panel?.ticket_panel_channel_id &&
        panel?.ticket_panel_message_id
    ) {

        const panelChannel =
            guild.channels.cache.get(
                panel.ticket_panel_channel_id
            );


        if (panelChannel) {

            try {

                const panelMessage =
                    await panelChannel.messages.fetch(
                        panel.ticket_panel_message_id
                    );


                if (panelMessage) {

                    await panelMessage.delete();

                    panelDeleted =
                        true;

                }

            } catch (error) {

                /*
                |--------------------------------------------------------------------------
                | Message already deleted / inaccessible
                |--------------------------------------------------------------------------
                */

                console.warn(
                    "⚠️ Ticket panel could not be deleted:",
                    error?.message ?? error
                );

            }

        }

    }


    /*
    |--------------------------------------------------------------------------
    | COMPLETELY DELETE DATABASE SETUP
    |--------------------------------------------------------------------------
    */

    try {

        const disabled =
            disableTicketSystem(
                guildId
            );


        if (!disabled) {

            return interaction.reply({

                content:
                    "❌ Failed to remove the ticket system from the database.",

                ephemeral: true

            });

        }

    } catch (error) {

        console.error(
            "❌ Ticket disable database error:",
            error
        );


        return interaction.reply({

            content:
                "❌ Failed to completely disable the ticket system.",

            ephemeral: true

        });

    }


    /*
    |--------------------------------------------------------------------------
    | SUCCESS
    |--------------------------------------------------------------------------
    */

    const embed =
        new EmbedBuilder()

            .setTitle(
                "🗑️ Ticket System Disabled"
            )

            .setDescription(

                [

                    "**VaultX Ticket System has been completely reset.**",

                    "",

                    panelDeleted
                        ? "✅ Existing ticket panel deleted."
                        : "ℹ️ No existing ticket panel was found.",

                    "🗄️ Guild ticket configuration deleted.",

                    "🧠 Ticket AI memory deleted.",

                    "🤖 Ticket AI statuses deleted.",

                    "🧹 Panel information removed from database.",

                    "",

                    "**The ticket system is now completely disabled.**",

                    "",

                    "To enable it again:",

                    "1️⃣ `/ticket setup`",

                    "2️⃣ `/ticket panel`"

                ].join("\n")

            )

            .setColor(
                0xef4444
            )

            .setTimestamp()

            .setFooter({

                text:
                    "VaultX • Ticket System"

            });


    await interaction.reply({

        embeds: [
            embed
        ],

        ephemeral: true

    });

}