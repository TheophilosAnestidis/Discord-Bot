import {
    SlashCommandBuilder,
    EmbedBuilder
} from "discord.js";

import {
    getGuildSettings
} from "../database/database.js";


const ticketOwnerPrefix =
    "ticket-owner:";


function getTicketOwnerId(channel) {

    const topic =
        channel?.topic ?? "";

    const ownerPart =
        topic
            .split("|")
            .find(part =>
                part.startsWith(ticketOwnerPrefix)
            );

    return ownerPart
        ? ownerPart.slice(ticketOwnerPrefix.length)
        : null;

}


function isTicketChannel(channel) {

    return Boolean(
        getTicketOwnerId(channel)
    );

}


import { requirePremium } from "../premium/premiumService.js";

const data =
    new SlashCommandBuilder()
        .setName("ticket-user")
        .setDescription("[ADMIN] • Manage users in the current ticket")
        .addSubcommand(subcommand =>
            subcommand
                .setName("add")
                .setDescription("Give a user access to this ticket")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to add")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("remove")
                .setDescription("[ADMIN] • Remove a user's access to this ticket")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to remove")
                        .setRequired(true)
                )
        );


export async function execute(interaction) {

    if (!(await requirePremium(interaction, "tickets"))) return;

    if (!interaction.guild || !interaction.channel) {

        return interaction.reply({
            content: "This command can only be used inside a ticket channel.",
            ephemeral: true
        });

    }


    if (!isTicketChannel(interaction.channel)) {

        return interaction.reply({
            content: "This command can only be used inside an open ticket.",
            ephemeral: true
        });

    }


    const settings =
        getGuildSettings(interaction.guild.id);

    const isStaff =
        Boolean(
            settings?.support_role_id &&
            interaction.member?.roles?.cache?.has(
                settings.support_role_id
            )
        );

    if (!isStaff) {

        return interaction.reply({
            content: "Only support staff can manage ticket users.",
            ephemeral: true
        });

    }


    const target =
        interaction.options.getUser("user", true);

    const action =
        interaction.options.getSubcommand();

    const ownerId =
        getTicketOwnerId(interaction.channel);

    if (target.id === ownerId) {

        return interaction.reply({
            content: "The ticket owner always keeps access to their ticket.",
            ephemeral: true
        });

    }


    if (target.bot) {

        return interaction.reply({
            content: "Bots cannot be added as ticket participants.",
            ephemeral: true
        });

    }


    try {

        if (action === "add") {

            await interaction.channel.permissionOverwrites.edit(target.id, {
                ViewChannel: true,
                SendMessages: true,
                ReadMessageHistory: true,
                AttachFiles: true,
                EmbedLinks: true
            });

        } else {

            await interaction.channel.permissionOverwrites.delete(target.id);

        }

    } catch (error) {

        console.error("Ticket user permission update failed:", error);

        return interaction.reply({
            content: "I could not update that user's ticket access.",
            ephemeral: true
        });

    }


    const embed =
        new EmbedBuilder()
            .setColor(action === "add" ? 0x22c55e : 0xef4444)
            .setDescription(
                action === "add"
                    ? `${target} was added to this ticket by ${interaction.user}.`
                    : `${target} was removed from this ticket by ${interaction.user}.`
            )
            .setTimestamp();

    return interaction.reply({
        embeds: [embed],
        allowedMentions: {
            users: [target.id, interaction.user.id]
        }
    });

}
