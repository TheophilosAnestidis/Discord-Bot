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
        .addSubcommand(subcommand =>
            subcommand
                .setName("leaderboard")
                .setDescription("[ADMIN] • Show support staff performance")
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

    if (subcommand === "leaderboard") {
        if (!(await requirePremium(interaction, "analytics"))) return;

        const tickets = getTicketsForGuild(interaction.guild.id)
            .filter(ticket => ticket.claimed_by);
        const staff = new Map();

        for (const ticket of tickets) {
            const current = staff.get(ticket.claimed_by) || {
                claimed: 0,
                closed: 0,
                responseTimes: []
            };
            current.claimed += 1;
            if (ticket.status === "closed") current.closed += 1;
            if (ticket.last_staff_message_at && ticket.created_at) {
                const responseTime = ticket.last_staff_message_at - ticket.created_at;
                if (responseTime >= 0) current.responseTimes.push(responseTime);
            }
            staff.set(ticket.claimed_by, current);
        }

        const ranking = [...staff.entries()]
            .map(([userId, stats]) => ({
                userId,
                ...stats,
                averageResponse: stats.responseTimes.length
                    ? Math.round(stats.responseTimes.reduce((sum, value) => sum + value, 0) / stats.responseTimes.length / 60000)
                    : null
            }))
            .sort((first, second) => second.closed - first.closed || second.claimed - first.claimed)
            .slice(0, 10);

        const rows = ranking.length
            ? ranking.map((agent, index) => {
                const member = interaction.guild.members.cache.get(agent.userId);
                const name = member?.displayName || member?.user?.username || agent.userId;
                const response = agent.averageResponse === null ? "n/a" : `${agent.averageResponse} min`;
                return `**${String(index + 1).padStart(2, "0")}**  ${name}\n> Closed **${agent.closed}** • Claimed **${agent.claimed}** • First response **${response}**`;
            }).join("\n\n")
            : "No claimed tickets have been recorded yet.";

        const embed = new EmbedBuilder()
            .setColor(0x8b5cf6)
            .setAuthor({ name: `${interaction.guild.name} • Support operations`, iconURL: interaction.guild.iconURL({ size: 128 }) || undefined })
            .setTitle("Support Staff Leaderboard")
            .setDescription("> Ranked by resolved tickets, then total ownership.\n\n" + rows)
            .setFooter({ text: "VaultX • Private admin report" })
            .setTimestamp();

        return interaction.reply({ embeds: [embed], ephemeral: true });
    }

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
        const urgentCount = urgent.length;
        const health = urgentCount === 0 && slaQueue === 0 ? "Healthy" : urgentCount > 3 ? "Needs attention" : "Monitor queue";
        const progress = (value, total, size = 12) => {
            const filled = total ? Math.round((value / total) * size) : 0;
            return `[${"#".repeat(Math.min(size, filled))}${"-".repeat(Math.max(0, size - filled))}]`;
        };
        const ratingDistribution = [5, 4, 3, 2, 1]
            .map(rating => `${rating}/5  ${progress(feedback.distribution[String(rating)] || 0, feedback.count, 8)}  ${feedback.distribution[String(rating)] || 0}`)
            .join("\n");
        const embedColor = urgentCount > 3 ? 0xef4444 : urgentCount || slaQueue ? 0xf59e0b : 0x22c55e;
        const action = urgentCount > 0
            ? `Review **${urgentCount}** high-priority ticket${urgentCount === 1 ? "" : "s"}.`
            : slaQueue > 0
                ? `Follow up on **${slaQueue}** ticket${slaQueue === 1 ? "" : "s"} with an SLA reminder.`
                : "No immediate action required.";
            const teamCount = new Set(tickets.filter(ticket => ticket.claimed_by).map(ticket => ticket.claimed_by)).size;

        const embed = new EmbedBuilder()
            .setColor(embedColor)
            .setAuthor({ name: `${interaction.guild.name} • Support operations`, iconURL: interaction.guild.iconURL({ size: 128 }) || undefined })
            .setTitle("Ticket Command Center")
            .setDescription(`**[ ${health.toUpperCase()} ]**\nLive operational snapshot for your support team.\n\n> ${action}`)
            .addFields(
                { name: "〢 Ticket volume", value: "```text\nTotal       " + tickets.length + "\nActive      " + active.length + "\nClosed      " + closed.length + "\nResolution  " + resolutionRate + "%\n```", inline: true },
                { name: "〢 Queue health", value: "```text\nHigh/urgent " + urgentCount + "\nSLA alerts  " + slaQueue + "\nFirst reply " + responseText + "\nStatus      " + health + "\n```", inline: true },
                { name: "〢 AI coverage", value: "```text\n" + progress(summaries, tickets.length) + "\nCoverage    " + aiCoverage + "%\nSummaries   " + summaries + "/" + tickets.length + "\n```", inline: false },
                { name: "〢 Team activity", value: "Active agents **" + teamCount + "**\nUse `/ticket leaderboard` for staff performance.", inline: true },
                { name: "〢 Customer experience", value: feedback.count ? `Average **${feedback.average}/5** • ${feedback.count} ratings\n\n\`\`\`text\n${ratingDistribution}\n\`\`\`` : "No ratings yet. Feedback appears here after customers rate closed tickets.", inline: false }
            )
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
