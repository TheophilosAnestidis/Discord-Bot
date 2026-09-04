import {
    SlashCommandBuilder
} from "discord.js";

import {
    getTicketAIStatus,
    setTicketAIStatus,
    setTicketEscalated,
    clearAIMemory
} from "../database/database.js";


import { requirePremium } from "../premium/premiumService.js";

export const data =
    new SlashCommandBuilder()
        .setName("ai-resume")
        .setDescription(
            "[ADMIN] • Resume AI support for this ticket"
        );


export async function execute(interaction) {

    if (!(await requirePremium(interaction, "ai"))) return;

    const ticketId =
        interaction.channel.id;


    try {

        /* =====================================================
           GET CURRENT STATUS
        ===================================================== */

        const currentStatus =
            getTicketAIStatus(
                ticketId
            );


        /* =====================================================
           CLEAR OLD AI MEMORY AFTER ESCALATION
        ===================================================== */

        if (
            currentStatus?.escalated
        ) {

            clearAIMemory(
                ticketId
            );

            console.log(
                `🧹 AI memory cleared for ticket ${ticketId}`
            );

        }


        /* =====================================================
           RESET ESCALATION
        ===================================================== */

        setTicketEscalated(
            ticketId,
            false
        );


        /* =====================================================
           ENABLE AI
        ===================================================== */

        setTicketAIStatus(
            ticketId,
            true
        );


        /* =====================================================
           RESPONSE
        ===================================================== */

        await interaction.reply({

            content:
                "🤖 **AI Support resumed.**\n\n" +
                "The AI is active again and the ticket is no longer escalated.",

            flags: 64

        });


        console.log(
            `🤖 AI resumed for ticket ${ticketId}`
        );


    } catch (error) {

        console.error(
            "❌ Failed to resume AI:",
            error
        );


        const response = {

            content:
                "❌ Failed to resume AI.",

            flags: 64

        };


        if (
            interaction.replied ||
            interaction.deferred
        ) {

            await interaction.followUp(
                response
            );

        } else {

            await interaction.reply(
                response
            );

        }

    }

}