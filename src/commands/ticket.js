import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    EmbedBuilder
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
import { getTicketsForGuild, getTicketFeedbackStats, getTicketIntelligence } from "../database/database.js";


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
        .addSubcommand(subcommand =>
            subcommand
                .setName("analytics")
                .setDescription("[ADMIN] • Show ticket performance and customer feedback")
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

    if (subcommand === "analytics") {
        if (!(await requirePremium(interaction, "analytics"))) return;

        const tickets = getTicketsForGuild(interaction.guild.id);
        const active = tickets.filter(ticket => ticket.status !== "closed");
        const closed = tickets.filter(ticket => ticket.status === "closed");
        const urgent = active.filter(ticket => ["urgent", "high"].includes(ticket.priority));
        const summaries = tickets.filter(ticket => getTicketIntelligence(ticket.channel_id)?.summary).length;
        const feedback = getTicketFeedbackStats(interaction.guild.id);
        const averageResponse = tickets
            .filter(ticket => ticket.last_staff_message_at && ticket.created_at)
            .map(ticket => ticket.last_staff_message_at - ticket.created_at)
            .filter(value => value >= 0);
        const responseMs = averageResponse.length
            ? averageResponse.reduce((total, value) => total + value, 0) / averageResponse.length
            : 0;
        const responseText = responseMs
            ? `${Math.round(responseMs / 60000)} min`
            : "No data";
        const resolutionRate = tickets.length ? Math.round((closed.length / tickets.length) * 100) : 0;
        const aiCoverage = tickets.length ? Math.round((summaries / tickets.length) * 100) : 0;
        const slaQueue = active.filter(ticket => ticket.sla_notified_at).length;
        const health = urgent === 0 && slaQueue === 0 ? "🟢 Healthy" : urgent > 3 ? "🔴 Needs attention" : "🟡 Monitor queue";
        const bar = (value, total, size = 10) => {
            const filled = total ? Math.round((value / total) * size) : 0;
            return `${"▰".repeat(Math.min(size, filled))}${"▱".repeat(Math.max(0, size - filled))}`;
        };
        const ratingDistribution = [5, 4, 3, 2, 1]
            .map(rating => `${rating}★ ${bar(feedback.distribution[String(rating)] || 0, feedback.count)} ${feedback.distribution[String(rating)] || 0}`)
            .join("\n");
        const embedColor = urgent > 3 ? 0xef4444 : urgent || slaQueue ? 0xf59e0b : 0x22c55e;

        const embed = new EmbedBuilder()
            .setColor(embedColor)
            .setAuthor({ name: `${interaction.guild.name} • Support operations`, iconURL: interaction.guild.iconURL({ size: 128 }) || undefined })
            .setTitle("Ticket Command Center")
            .setDescription(`**${health}**\nLive operational snapshot for your support team.`)
            .addFields(
                { name: "📊 Ticket volume", value: `Total **${tickets.length}**\nActive **${active.length}** • Closed **${closed.length}**\nResolution rate **${resolutionRate}%**`, inline: true },
                { name: "⚡ Queue health", value: `High / urgent **${urgent.length}**\nSLA reminders **${slaQueue}**\nFirst response **${responseText}**`, inline: true },
                { name: "🧠 AI coverage", value: `${bar(summaries, tickets.length)}\nSummaries **${summaries}/${tickets.length}**\nCoverage **${aiCoverage}%**`, inline: true },
                { name: "⭐ Customer experience", value: feedback.count ? `Average **${feedback.average}/5** • ${feedback.count} ratings\n\n${ratingDistribution}` : "No ratings yet. Feedback appears here after customers rate closed tickets.", inline: false }
            )
            .setThumbnail(interaction.guild.iconURL({ size: 128 }) || "https://cdn.discordapp.com/embed/avatars/0.png")
            .setFooter({ text: "VaultX • Private admin report" })
            .setTimestamp();

        return interaction.reply({ embeds: [embed], ephemeral: true });
    }

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
