import {
    getGuildSettings,
    getTicketAIStatus,
    setTicketAIStatus,
    setTicketEscalated,
    isAIEnabled,
    getTicketIntelligence,
    updateTicketRecord
} from "../database/database.js";

import {
    generateAIResponse,
    analyzeTicketMessage,
    clearAIState
} from "../ai/aiService.js";

import {
    sendStaffIntelligenceLog
} from "../handlers/ticketHandler.js";

import { hasPremium } from "../premium/premiumService.js";


/*
|--------------------------------------------------------------------------
| AI CONTROLLER
|--------------------------------------------------------------------------
|
| Central controller between Discord and the AI service.
|
| IMPORTANT:
|
| Staff messages DO NOT automatically disable the AI.
|
| AI can only be disabled by:
|
| - Manual AI toggle
| - AI escalation
| - Manual escalation
|
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| DEBUG
|--------------------------------------------------------------------------
*/

const DEBUG = true;


function debug(...args) {

    if (!DEBUG) {
        return;
    }

    console.log(
        "🧠 [AI CONTROLLER]",
        ...args
    );

}


/*
|--------------------------------------------------------------------------
| STAFF TAKEOVER
|--------------------------------------------------------------------------
|
| IMPORTANT:
|
| We intentionally DO NOT automatically escalate when a staff
| member sends a message.
|
| This prevents this situation:
|
| Staff sends "hello"
|        ↓
| AI detects staff
|        ↓
| AI disables itself
|
| The AI can instead be disabled manually or through
| the AI escalation system.
|
|--------------------------------------------------------------------------
*/

export async function handleStaffTakeover({
    message
}) {

    if (!message?.guild) {
        return false;
    }


    if (message.author?.bot) {
        return false;
    }


    /*
     * Staff takeover is disabled intentionally.
     *
     * This means staff members can test and use the AI
     * without their own messages automatically disabling it.
     */

    return false;

}


/*
|--------------------------------------------------------------------------
| TICKET VALIDATION
|--------------------------------------------------------------------------
*/

/**
 * Check whether a channel is an AI ticket.
 */
export function isAITicket({
    channel,
    guild
}) {

    if (
        !channel ||
        !guild
    ) {

        return false;

    }


    /*
     * Only text-based channels can receive
     * normal AI messages.
     */

    if (
        typeof channel.isTextBased === "function" &&
        !channel.isTextBased()
    ) {

        return false;

    }


    const settings =
        getGuildSettings(
            guild.id
        );


    if (!settings) {

        debug(
            `❌ No settings for guild ${guild.id}`
        );

        return false;

    }


    /*
     * If a ticket category is configured,
     * only channels inside that category
     * are considered AI tickets.
     */

    if (
        settings.ticket_category_id &&
        channel.parentId !==
        settings.ticket_category_id
    ) {

        return false;

    }


    return true;

}


/*
|--------------------------------------------------------------------------
| AI STATUS
|--------------------------------------------------------------------------
*/

/**
 * Check whether AI is currently allowed
 * to respond inside a ticket.
 */
export function canAIRespond({
    guildId,
    ticketId
}) {

    if (!hasPremium(guildId, "ai")) {
        return false;
    }

    /*
     * Global AI.
     */

    const globalEnabled =
        isAIEnabled(
            guildId
        );


    if (!globalEnabled) {

        debug(
            `❌ Global AI is OFF | guild=${guildId}`
        );

        return false;

    }


    /*
     * Ticket AI.
     */

    const status =
        getTicketAIStatus(
            ticketId
        );

    console.log(
        `🔍 AI STATUS CHECK | ticket=${ticketId} | status=`,
        status
    );

    if (!status) {

        debug(
            `❌ No ticket AI status | ticket=${ticketId}`
        );

        return false;

    }


    debug(
        `📊 Ticket AI status | ticket=${ticketId} | enabled=${status.enabled} | escalated=${status.escalated}`
    );


    /*
     * Ticket AI disabled.
     */

    if (
        !Boolean(
            status.enabled
        )
    ) {

        debug(
            `❌ Ticket AI is OFF | ticket=${ticketId}`
        );

        return false;

    }


    /*
     * Ticket escalated.
     */

    if (
        Boolean(
            status.escalated
        )
    ) {

        debug(
            `❌ Ticket is escalated | ticket=${ticketId}`
        );

        return false;

    }


    return true;

}


/*
|--------------------------------------------------------------------------
| HANDLE AI MESSAGE
|--------------------------------------------------------------------------
*/

export async function handleAIMessage({
    message
}) {

    try {

        /*
         * --------------------------------------------------------------
         * BASIC VALIDATION
         * --------------------------------------------------------------
         */

        if (!message) {
            return null;
        }


        if (!message.guild) {
            return null;
        }


        /*
         * Never process bot messages.
         */

        if (message.author?.bot) {
            return null;
        }


        const channel =
            message.channel;


        if (!channel) {
            return null;
        }


        debug(
            `📨 Message received | author=${message.author?.tag ?? message.author?.username ?? "unknown"} | channel=${channel.id} | content="${message.content ?? ""}"`
        );


        /*
         * --------------------------------------------------------------
         * TICKET VALIDATION
         * --------------------------------------------------------------
         */

        const ticket =
            isAITicket({

                channel,

                guild:
                    message.guild

            });


        if (!ticket) {

            return null;

        }


        debug(
            `🎫 Valid AI ticket | ticket=${channel.id}`
        );


        /*
         * --------------------------------------------------------------
         * STAFF TAKEOVER
         * --------------------------------------------------------------
         *
         * IMPORTANT:
         *
         * This function currently always returns false.
         *
         * Staff messages therefore DO NOT automatically
         * disable the AI.
         *
         * --------------------------------------------------------------
         */

        const staffTakeover =
            await handleStaffTakeover({

                message

            });


        if (staffTakeover) {

            debug(
                `🛑 Staff takeover | ticket=${channel.id}`
            );

            return null;

        }


        /*
         * --------------------------------------------------------------
         * CHECK GLOBAL + TICKET AI
         * --------------------------------------------------------------
         */

        const allowed =
            canAIRespond({

                guildId:
                    message.guild.id,

                ticketId:
                    channel.id

            });


        if (!allowed) {

            debug(
                `🚫 AI is not allowed to respond | ticket=${channel.id}`
            );

            return null;

        }


        /*
         * --------------------------------------------------------------
         * MESSAGE CONTENT
         * --------------------------------------------------------------
         */

        const content =
            message.content?.trim();


        if (!content) {

            debug(
                `⚠️ Empty message ignored | ticket=${channel.id}`
            );

            return null;

        }


        /*
         * --------------------------------------------------------------
         * FIRST-MESSAGE AI TRIAGE
         * --------------------------------------------------------------
         */

        if (!getTicketIntelligence(channel.id)) {

            const intelligence = await analyzeTicketMessage({
                ticketId: channel.id,
                guildId: message.guild.id,
                message: content
            });

            if (intelligence) {
                updateTicketRecord(channel.id, {
                    priority: intelligence.priority,
                    tags: JSON.stringify([
                        intelligence.category,
                        `sentiment:${intelligence.sentiment}`
                    ])
                });

                const settings = getGuildSettings(message.guild.id);

                // Send the AI analysis to the private staff thread only.
                await sendStaffIntelligenceLog(
                    channel,
                    settings,
                    intelligence
                );

                debug(
                    `🎯 AI triage | category=${intelligence.category} | priority=${intelligence.priority} | sentiment=${intelligence.sentiment} | confidence=${intelligence.confidence}%`
                );
            }
        }


        /*
         * --------------------------------------------------------------
         * TYPING INDICATOR
         * --------------------------------------------------------------
         */

        try {

            if (
                typeof channel.sendTyping === "function"
            ) {

                await channel.sendTyping();

            }

        } catch (typingError) {

            debug(
                "⚠️ Failed to send typing indicator:",
                typingError?.message
            );

        }


        /*
         * --------------------------------------------------------------
         * GENERATE AI RESPONSE
         * --------------------------------------------------------------
         */

        debug(
            `🚀 Sending message to AI service | ticket=${channel.id}`
        );


        let result;


        try {

            result =
                await generateAIResponse({

                    ticketId:
                        channel.id,

                    userId:
                        message.author.id,

                    username:
                        message.member?.displayName ??
                        message.author.username,

                    message:
                        content

                });

        } catch (aiError) {

            console.error(
                "❌ AI SERVICE ERROR:",
                aiError
            );


            /*
             * Don't send an error every time the API fails.
             *
             * Log it instead so the ticket doesn't get spammed.
             */

            return null;

        }


        /*
         * --------------------------------------------------------------
         * NULL RESULT
         * --------------------------------------------------------------
         */

        if (!result) {

            debug(
                `⚠️ AI service returned null/undefined | ticket=${channel.id}`
            );

            return null;

        }


        debug(
            "✅ AI service result:",
            result
        );


        /*
         * --------------------------------------------------------------
         * ESCALATION
         * --------------------------------------------------------------
         */

        if (
            result.escalate === true
        ) {

            debug(
                `🚨 AI requested escalation | ticket=${channel.id}`
            );


            /*
             * Disable AI permanently for this ticket
             * until manually enabled/reset.
             */

            setTicketEscalated(
                channel.id,
                true
            );


            /*
             * Clear all pending AI work.
             */

            clearAIState(
                channel.id
            );


            /*
             * Send the final AI message first.
             */

            const escalationText =
                typeof result === "string"
                    ? result
                    : result.text;


            if (
                escalationText?.trim()
            ) {

                await channel.send({

                    content:
                        escalationText.trim()

                });

            }


            /*
             * Notify staff.
             */

            await notifyStaff({

                message,

                channel

            });


            return result;

        }


        /*
         * --------------------------------------------------------------
         * NORMAL RESPONSE
         * --------------------------------------------------------------
         */

        const responseText =
            typeof result === "string"
                ? result
                : result.text;


        if (
            !responseText?.trim()
        ) {

            debug(
                `⚠️ AI returned no text | ticket=${channel.id}`
            );

            return result;

        }


        /*
         * --------------------------------------------------------------
         * SEND AI RESPONSE
         * --------------------------------------------------------------
         */

        debug(
            `📤 Sending AI response | ticket=${channel.id}`
        );


        await channel.send({

            content:
                responseText.trim()

        });


        debug(
            `✅ AI response sent | ticket=${channel.id}`
        );


        return result;

    } catch (error) {

        console.error(
            "❌ AI CONTROLLER ERROR:",
            error
        );


        return null;

    }

}


/*
|--------------------------------------------------------------------------
| STAFF NOTIFICATION
|--------------------------------------------------------------------------
*/

/**
 * Notify the configured support role after AI escalation.
 */
async function notifyStaff({
    message,
    channel
}) {

    const settings =
        getGuildSettings(
            message.guild.id
        );


    if (
        !settings?.support_role_id
    ) {

        debug(
            "⚠️ No support role configured."
        );

        return;

    }


    try {

        await channel.send({

            content:
                `<@&${settings.support_role_id}>`,

            allowedMentions: {

                roles: [
                    settings.support_role_id
                ]

            }

        });


        debug(
            `📢 Staff notified | role=${settings.support_role_id}`
        );

    } catch (error) {

        console.error(
            "❌ Failed to notify staff:",
            error
        );

    }

}


/*
|--------------------------------------------------------------------------
| MANUAL CONTROLS
|--------------------------------------------------------------------------
*/

/**
 * Disable AI for a ticket.
 */
export function disableTicketAI(
    ticketId
) {

    clearAIState(
        ticketId
    );


    const status =
        setTicketAIStatus(
            ticketId,
            false
        );


    debug(
        `🔴 Manual AI disable | ticket=${ticketId}`
    );


    return status;

}


/**
 * Enable AI for a ticket.
 *
 * IMPORTANT:
 *
 * Enabling AI also removes the escalated state.
 */
export function enableTicketAI(
    ticketId
) {

    /*
     * Clear previous pending state first.
     */

    clearAIState(
        ticketId
    );


    /*
     * Remove escalation.
     */

    setTicketEscalated(
        ticketId,
        false
    );


    /*
     * Enable ticket AI.
     */

    const status =
        setTicketAIStatus(
            ticketId,
            true
        );


    debug(
        `🟢 Manual AI enable | ticket=${ticketId}`
    );


    return status;

}


/**
 * Manually escalate a ticket.
 */
export function escalateTicket(
    ticketId
) {

    /*
     * Stop pending requests.
     */

    clearAIState(
        ticketId
    );


    /*
     * Disable AI + mark as escalated.
     */

    const status =
        setTicketEscalated(
            ticketId,
            true
        );


    debug(
        `🚨 Manual ticket escalation | ticket=${ticketId}`
    );


    return status;

}