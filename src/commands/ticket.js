import {
    SlashCommandBuilder,
    PermissionFlagsBits
} from "discord.js";

import {
    execute as executeSetup
} from "./setup.js";

import {
    execute as executeDisable
} from "./ticket-disable.js";

import {
    execute as executePanel
} from "./ticket-panel.js";

import {
    execute as executeUser
} from "./ticket-user.js";

import { requirePremium } from "../premium/premiumService.js";


function addSetupOptions(subcommand) {

    return subcommand;

}


export const data =
    new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("[ADMIN] • Configure and manage the VaultX ticket system")
        .addSubcommand(subcommand =>
            addSetupOptions(
                subcommand
                    .setName("setup")
                    .setDescription("[ADMIN] • Configure the ticket system")
            )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("disable")
                .setDescription("[ADMIN] • Disable and reset the ticket system")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("panel")
                .setDescription("[ADMIN] • Send the ticket creation panel")
        )
        .addSubcommandGroup(group =>
            group
                .setName("user")
                .setDescription("[STAFF] • Manage users in the current ticket")
                .addSubcommand(subcommand =>
                    subcommand
                        .setName("add")
                        .setDescription("[STAFF] • Give a user access to this ticket")
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
                        .setDescription("[STAFF] • Remove a user's access to this ticket")
                        .addUserOption(option =>
                            option
                                .setName("user")
                                .setDescription("User to remove")
                                .setRequired(true)
                        )
                )
        );


export async function execute(interaction) {

    const subcommand =
        interaction.options.getSubcommand();

    const group =
        interaction.options.getSubcommandGroup(false);

    if (group === "user") {

        return executeUser(interaction);

    }


    if (
        !interaction.guild
    ) {

        return interaction.reply({
            content: "This command can only be used inside a server.",
            ephemeral: true
        });

    }


    if (
        !interaction.member?.permissions?.has(
            PermissionFlagsBits.Administrator
        )
    ) {

        return interaction.reply({
            content: "Only server administrators can use this ticket command.",
            ephemeral: true
        });

    }


    if (!(await requirePremium(interaction, "tickets"))) return;

    if (subcommand === "setup") {

        return executeSetup(interaction);

    }


    if (subcommand === "disable") {

        return executeDisable(interaction);

    }


    if (subcommand === "panel") {

        return executePanel(interaction);

    }

}
