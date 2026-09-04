import {
    ChannelType,
    PermissionFlagsBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    UserSelectMenuBuilder,
    MessageFlags
} from "discord.js";

import {
    getGuildSettings,
    getTicketAIStatus,
    initializeTicketAIStatus,
    toggleTicketAI,
    setTicketAIStatus,
    setTicketEscalated,
    deleteTicketAIStatus,
    isAIEnabled,
    createTicketRecord,
    updateTicketRecord,
    getTicketRecord
} from "../database/database.js";

import {
    clearAIState
} from "../ai/aiService.js";

import { requirePremium, hasPremium, getPremium, formatPremium } from "../premium/premiumService.js";


/*
|--------------------------------------------------------------------------
| VAULTX TICKET SYSTEM
|--------------------------------------------------------------------------
|
| Features:
|
| - Premium ticket embeds
| - AI state synchronization
| - Claim system
| - AI toggle
| - Escalation
| - Close confirmation
| - Transcript generation
| - Global ticket logs
| - Private staff-only ticket logs
| - Transcript download button
|
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| CONFIG
|--------------------------------------------------------------------------
*/

const CONFIG = {

    colors: {

        primary: 0x8b5cf6,
        primaryDark: 0x6d28d9,
        success: 0x22c55e,
        danger: 0xef4444,
        warning: 0xf59e0b,
        info: 0x3b82f6,
        neutral: 0x64748b,
        dark: 0x111827

    },

    channelNameMaxLength: 95,

    deleteDelay: 4000,

    topicPrefix: "ticket-owner:",

    claimPrefix: "claimed-by:",

    staffThreadName: "〢・staff-logs",

    staffThreadAutoArchive: 10080

};


/*
|--------------------------------------------------------------------------
| TICKET TYPES
|--------------------------------------------------------------------------
*/

const ticketTypes = {

    purchase: {

        name: "purchase",
        emoji: "•",
        label: "Purchase",
        description:
            "Questions about purchases, orders or payments."

    },

    bot: {

        name: "bot-help",
        emoji: "•",
        label: "Bot Help",
        description:
            "Get help with Discord bots and custom development."

    },

    bug: {

        name: "bug-report",
        emoji: "•",
        label: "Bug Report",
        description:
            "Report a bug or unexpected issue."

    },

    general: {

        name: "general",
        emoji: "•",
        label: "General Support",
        description:
            "General questions and support requests."

    }

};


/*
|--------------------------------------------------------------------------
| DEBUG
|--------------------------------------------------------------------------
*/

const DEBUG = true;


function debug(...args) {

    if (!DEBUG) return;

    console.log(
        "〢 [TICKET]",
        ...args
    );

}


/*
|--------------------------------------------------------------------------
| SAFE USERNAME
|--------------------------------------------------------------------------
*/

function sanitizeUsername(username) {

    return String(username || "user")

        .toLowerCase()

        .replace(
            /[^a-z0-9-_]/g,
            "-"
        )

        .replace(
            /-+/g,
            "-"
        )

        .replace(
            /^-+|-+$/g,
            ""
        )

        .slice(
            0,
            40
        ) || "user";

}


/*
|--------------------------------------------------------------------------
| TICKET CONTROLS
|--------------------------------------------------------------------------
*/

function buildTicketControls(
    aiEnabled = false,
    claimed = false
) {

    const primaryRow =
        new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setCustomId(
                    "ticket:claim"
                )

                .setLabel(
                    claimed
                        ? "Claimed"
                        : "Claim Ticket"
                )

                .setStyle(
                    claimed
                        ? ButtonStyle.Secondary
                        : ButtonStyle.Primary
                )

                .setDisabled(
                    claimed
                ),


            new ButtonBuilder()

                .setCustomId(
                    "ticket:ai"
                )

                .setLabel(
                    aiEnabled
                        ? "AI • ON"
                        : "AI • OFF"
                )

                .setStyle(
                    aiEnabled
                        ? ButtonStyle.Success
                        : ButtonStyle.Secondary
                ),


            new ButtonBuilder()

                .setCustomId(
                    "ticket:close"
                )

                .setLabel(
                    "Close Ticket"
                )

                .setStyle(
                    ButtonStyle.Danger
                ),


        );


    const managementRow =
        new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setCustomId(
                    "ticket:priority"
                )

                .setLabel(
                    "Priority"
                )

                .setStyle(
                    ButtonStyle.Secondary
                ),


            new ButtonBuilder()
                .setCustomId("ticket:status")
                .setLabel("Status")
                .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
                .setCustomId("ticket:add-user")
                .setLabel("Add User")
                .setStyle(ButtonStyle.Secondary)

        );


    return [
        primaryRow,
        managementRow
    ];

}


/*
|--------------------------------------------------------------------------
| CLOSE CONFIRMATION
|--------------------------------------------------------------------------
*/

function buildCloseConfirmation() {

    return new ActionRowBuilder()

        .addComponents(

            new ButtonBuilder()

                .setCustomId(
                    "ticket:close:confirm"
                )

                .setLabel(
                    "Close Ticket"
                )

                .setStyle(
                    ButtonStyle.Danger
                ),


            new ButtonBuilder()

                .setCustomId(
                    "ticket:close:cancel"
                )

                .setLabel(
                    "Keep Open"
                )

                .setEmoji(
                    "↩️"
                )

                .setStyle(
                    ButtonStyle.Secondary
                )

        );

}


/*
|--------------------------------------------------------------------------
| CHECK STAFF
|--------------------------------------------------------------------------
*/

function isMemberStaff(
    interaction,
    settings
) {

    if (
        !interaction?.member ||
        !settings?.support_role_id
    ) {

        return false;

    }


    return Boolean(

        interaction.member.roles?.cache?.has(
            settings.support_role_id
        )

    );

}


/*
|--------------------------------------------------------------------------
| GET OWNER
|--------------------------------------------------------------------------
*/

function getTicketOwnerId(
    channel
) {

    const topic =
        channel?.topic ?? "";


    if (
        !topic.startsWith(
            CONFIG.topicPrefix
        )
    ) {

        return null;

    }


    return topic

        .split("|")[0]

        .replace(
            CONFIG.topicPrefix,
            ""
        )

        .trim() || null;

}


/*
|--------------------------------------------------------------------------
| GET CLAIMED STAFF
|--------------------------------------------------------------------------
*/

function getClaimedStaffId(
    channel
) {

    const topic =
        channel?.topic ?? "";


    const match =
        topic.match(
            /claimed-by:([0-9]+)/
        );


    return match?.[1] ?? null;

}


/*
|--------------------------------------------------------------------------
| CHECK TICKET
|--------------------------------------------------------------------------
*/

function isTicketChannel(
    channel
) {

    if (!channel) {

        return false;

    }


    if (
        channel.type !==
        ChannelType.GuildText
    ) {

        return false;

    }


    return (

        channel.topic ?? ""

    ).startsWith(
        CONFIG.topicPrefix
    );

}


/*
|--------------------------------------------------------------------------
| CREATE MAIN TICKET EMBED
|--------------------------------------------------------------------------
*/

function buildTicketEmbed({ user, ticketType, aiEnabled, priority = "normal", status = "open" }) {
    return new EmbedBuilder()
        .setAuthor({ name: "VaultX 〢 Support" })
        .setTitle(`${ticketType.label} 〢 Support Ticket`)
        .setDescription([
            `> **Owner** 〢 ${user}`,
            '',
            '• Clear issue\n• Relevant files\n• No sensitive data',
            '',
            `〢 Status  > **${status.toUpperCase()}**\n〢 Priority  > **${priority.toUpperCase()}**\n〢 AI  > **${aiEnabled ? "ONLINE" : "OFFLINE"}**`
        ].join('\n'))
        .setColor(CONFIG.colors.primary)
        .setFooter({ text: 'VaultX • Ticket Operations' })
        .setTimestamp();
}


/*
|--------------------------------------------------------------------------
| CREATE STAFF-ONLY THREAD
|--------------------------------------------------------------------------
*/

async function createStaffLogThread(
    channel,
    settings
) {

    try {

        const existingThread =
            channel.threads?.cache?.find(

                thread =>
                    thread.name ===
                    CONFIG.staffThreadName

            );


        if (existingThread) {

            return existingThread;

        }


        const staffRole =
            channel.guild.roles.cache.get(
                settings.support_role_id
            );


        if (!staffRole) {

            console.error(
                "❌ Staff role not found while creating staff log thread."
            );

            return null;

        }


        const starterMessage =
            await channel.send({

                content:
                    "🔒 **Staff Log Thread**\n> Internal ticket logs.",

                allowedMentions: {
                    parse: []
                }

            });


        const thread =
            await starterMessage.startThread({

                name:
                    CONFIG.staffThreadName,

                autoArchiveDuration:
                    CONFIG.staffThreadAutoArchive,

                type:
                    ChannelType.PrivateThread,

                invitable:
                    false

            });


        const staffMembers =
            staffRole.members;


        for (
            const member
            of staffMembers.values()
        ) {

            try {

                await thread.members.add(
                    member.id
                );

            } catch (error) {

                console.error(

                    `❌ Failed to add staff ${member.id} to staff thread:`,

                    error

                );

            }

        }


        debug(
            `Staff log thread created | ticket=${channel.id} | thread=${thread.id}`
        );


        try {

            await starterMessage.delete();

        } catch { }


        return thread;

    } catch (error) {

        console.error(
            "❌ Failed to create staff log thread:",
            error
        );

        return null;

    }

}


/*
|--------------------------------------------------------------------------
| GET OR CREATE STAFF LOG THREAD
|--------------------------------------------------------------------------
*/

async function getStaffLogThread(
    channel,
    settings
) {

    try {

        const activeThread =
            channel.threads?.cache?.find(

                thread =>
                    thread.name ===
                    CONFIG.staffThreadName

            );


        if (activeThread) {

            return activeThread;

        }


        return await createStaffLogThread(
            channel,
            settings
        );

    } catch (error) {

        console.error(
            "❌ Failed to get staff log thread:",
            error
        );

        return null;

    }

}


/*
|--------------------------------------------------------------------------
| SEND STAFF CLAIM LOG
|--------------------------------------------------------------------------
*/

async function sendStaffClaimLog(
    channel,
    settings,
    staff
) {

    const thread =
        await getStaffLogThread(
            channel,
            settings
        );


    if (!thread) {

        return false;

    }


    try {

        const embed =
            new EmbedBuilder()

                .setTitle(
                    "VaultX 〢 Ticket Claimed"
                )

                .addFields(
                    {
                        name: "• Staff",
                        value: `> ${staff}`,
                        inline: true
                    },
                    {
                        name: "• AI Status",
                        value: "> Disabled",
                        inline: true
                    }
                )

                .setColor(
                    CONFIG.colors.info
                )

                .setTimestamp();


        await thread.send({

            embeds: [
                embed
            ],

            allowedMentions: {

                users: [
                    staff.id
                ]

            }

        });


        debug(
            `Claim log sent ONLY to staff thread | ticket=${channel.id}`
        );


        return true;

    } catch (error) {

        console.error(
            "❌ Failed to send claim log to staff thread:",
            error
        );

        return false;

    }

}


/*
|--------------------------------------------------------------------------
| SEND STAFF INTELLIGENCE LOG
|--------------------------------------------------------------------------
| Internal AI triage result for support staff.
*/

export async function sendStaffIntelligenceLog(
    channel,
    settings,
    intelligence
) {

    if (!channel || !settings || !intelligence) {
        return false;
    }

    const thread = await getStaffLogThread(channel, settings);

    if (!thread) {
        return false;
    }

    const priorityMeta = {
        low: { label: "LOW", color: CONFIG.colors.success },
        normal: { label: "NORMAL", color: CONFIG.colors.info },
        high: { label: "HIGH", color: CONFIG.colors.warning },
        critical: { label: "CRITICAL", color: CONFIG.colors.danger }
    };

    const sentimentMeta = {
        positive: "Positive",
        neutral: "Neutral",
        frustrated: "Frustrated",
        angry: "Angry"
    };

    const priority = priorityMeta[intelligence.priority] || priorityMeta.normal;
    const sentiment = sentimentMeta[intelligence.sentiment] || "😐 Neutral";
    const confidence = Math.max(0, Math.min(100, Number(intelligence.confidence) || 0));

    const embed = new EmbedBuilder()
        .setTitle("VaultX 〢 AI Intelligence")
        .setDescription(
            `> Internal triage 〢 Staff only`
        )
        .addFields(
            {
                name: "• Category",
                value: `> ${String(intelligence.category || "general").toUpperCase()}`,
                inline: true
            },
            {
                name: "Priority",
                value: `> **${priority.label}**`,
                inline: true
            },
            {
                name: "• Confidence",
                value: `> **${confidence}%**`,
                inline: true
            },
            {
                name: "• Sentiment",
                value: `> ${sentiment}`,
                inline: true
            },
            {
                name: "• Summary",
                value: `> ${String(intelligence.summary || "No summary available.").slice(0, 1024)}`,
                inline: false
            },
            {
                name: "• Issue",
                value: `> ${String(intelligence.issue || "No specific issue detected.").slice(0, 1024)}`,
                inline: false
            },
            {
                name: "• Suggested Action",
                value: `> ${String(intelligence.suggested_action || intelligence.suggestedAction || "Review the ticket manually.").slice(0, 1024)}`,
                inline: false
            }
        )
        .setColor(priority.color)
        .setFooter({ text: "VaultX AI Support • Internal Intelligence" })
        .setTimestamp();

    try {
        await thread.send({
            embeds: [embed],
            allowedMentions: { parse: [] }
        });

        debug(`AI intelligence log sent ONLY to staff thread | ticket=${channel.id}`);
        return true;
    } catch (error) {
        console.error("❌ Failed to send AI intelligence log:", error);
        return false;
    }
}


/*
|--------------------------------------------------------------------------
| SEND STAFF AI LOG
|--------------------------------------------------------------------------
*/

async function sendStaffAILog(
    channel,
    settings,
    staff,
    newStatus,
    globalAIEnabled
) {

    const thread =
        await getStaffLogThread(
            channel,
            settings
        );


    if (!thread) {

        return false;

    }


    try {

        const embed =
            new EmbedBuilder()

                .setTitle(
                    newStatus
                        ? "AI Enabled !"
                        : "AI Disabled !"
                )

                .addFields(

                    {

                        name: "• Staff",
                        value: `> ${staff}`

                    },

                    {

                        name: "• Ticket AI",
                        value: `> ${newStatus ? "ON" : "OFF"}`,
                        inline: true

                    },

                    {

                        name: "• Global AI",
                        value: `> ${globalAIEnabled ? "ON" : "OFF"}`,
                        inline: true

                    }

                )

                .setDescription(

                    newStatus

                        ? "> AI monitoring enabled."

                        : "> AI monitoring disabled."

                )

                .setColor(

                    newStatus

                        ? CONFIG.colors.success

                        : CONFIG.colors.danger

                )

                .setTimestamp();


        await thread.send({

            embeds: [
                embed
            ],

            allowedMentions: {

                users: [
                    staff.id
                ]

            }

        });


        debug(
            `AI log sent ONLY to staff thread | ticket=${channel.id}`
        );


        return true;

    } catch (error) {

        console.error(
            "❌ Failed to send AI log to staff thread:",
            error
        );

        return false;

    }

}


/*
|--------------------------------------------------------------------------
| CREATE TICKET
|--------------------------------------------------------------------------
*/

export async function createTicket(
    interaction,
    type
) {

    if (
        !interaction.deferred &&
        !interaction.replied
    ) {

        await interaction.deferReply({

            flags:
                MessageFlags.Ephemeral

        });

    }


    try {

        if (!interaction.guild) {

            await interaction.editReply({

                content:
                    "❌ This system can only be used inside a server."

            });

            return;

        }


        const guild =
            interaction.guild;

        if (!(await requirePremium(interaction, "tickets"))) return;

        const user =
            interaction.user;


        const settings =
            getGuildSettings(
                guild.id
            );


        if (!settings) {

            await interaction.editReply({

                content:
                    "❌ Ticket system is not configured yet."

            });

            return;

        }


        if (!settings.ticket_category_id) {

            await interaction.editReply({

                content:
                    "❌ Ticket category is missing from the configuration."

            });

            return;

        }


        if (!settings.support_role_id) {

            await interaction.editReply({

                content:
                    "❌ Support role is missing from the configuration."

            });

            return;

        }


        const ticketType =
            ticketTypes[type];


        if (!ticketType) {

            await interaction.editReply({

                content:
                    "❌ Invalid ticket type."

            });

            return;

        }


        const existingTicket =
            guild.channels.cache.find(

                channel =>

                    isTicketChannel(
                        channel
                    ) &&

                    getTicketOwnerId(
                        channel
                    ) === user.id

            );


        if (existingTicket) {

            const embed =
                new EmbedBuilder()

                    .setTitle(
                        "VaultX 〢 Existing Ticket"
                    )

                    .setDescription(

                        [

                            "You already have an open support ticket.",

                            "",

                            `🎫 **Ticket:** ${existingTicket}`,

                            "",

                            "Please use your existing ticket before creating another one."

                        ].join("\n")

                    )

                    .setColor(
                        CONFIG.colors.warning
                    )

                    .setTimestamp();


            await interaction.editReply({

                embeds: [
                    embed
                ]

            });

            return;

        }


        const globalAIEnabled =
            Boolean(
                isAIEnabled(
                    guild.id
                )
            );


        debug(
            `Creating ticket | guild=${guild.id} | globalAI=${globalAIEnabled}`
        );


        const safeUsername =
            sanitizeUsername(
                user.username
            );


        const channelName =

            `${ticketType.emoji}-${ticketType.name}-${safeUsername}`

                .slice(
                    0,
                    CONFIG.channelNameMaxLength
                );


        const channel =
            await guild.channels.create({

                name:
                    channelName,

                type:
                    ChannelType.GuildText,

                parent:
                    settings.ticket_category_id,

                topic:
                    `${CONFIG.topicPrefix}${user.id}`,

                permissionOverwrites: [

                    {

                        id:
                            guild.roles.everyone.id,

                        deny: [

                            PermissionFlagsBits.ViewChannel

                        ]

                    },

                    {

                        id:
                            user.id,

                        allow: [

                            PermissionFlagsBits.ViewChannel,

                            PermissionFlagsBits.SendMessages,

                            PermissionFlagsBits.ReadMessageHistory,

                            PermissionFlagsBits.AttachFiles,

                            PermissionFlagsBits.EmbedLinks

                        ]

                    },

                    {

                        id:
                            settings.support_role_id,

                        allow: [

                            PermissionFlagsBits.ViewChannel,

                            PermissionFlagsBits.SendMessages,

                            PermissionFlagsBits.ReadMessageHistory,

                            PermissionFlagsBits.AttachFiles,

                            PermissionFlagsBits.EmbedLinks

                        ]

                    },

                    {

                        id:
                            interaction.client.user.id,

                        allow: [

                            PermissionFlagsBits.ViewChannel,

                            PermissionFlagsBits.SendMessages,

                            PermissionFlagsBits.ReadMessageHistory,

                            PermissionFlagsBits.AttachFiles,

                            PermissionFlagsBits.EmbedLinks,

                            PermissionFlagsBits.ManageChannels,

                            PermissionFlagsBits.ManageMessages

                        ]

                    }

                ]

            });


        createTicketRecord({
            guildId: guild.id,
            channelId: channel.id,
            ownerId: user.id,
            type: ticketType.name
        });


        clearAIState(
            channel.id
        );


        const initializedStatus =
            initializeTicketAIStatus(

                channel.id,

                guild.id

            );


        const initialAIStatus =
            Boolean(
                initializedStatus?.enabled
            );


        debug(
            `Ticket AI initialized | ticket=${channel.id} | enabled=${initialAIStatus}`
        );


        const embed =
            buildTicketEmbed({

                user,

                ticketType,

                aiEnabled: initialAIStatus,
                priority: "normal",
                status: "open"

            });


        await channel.send({

            content:
                `${user} <@&${settings.support_role_id}>`,

            embeds: [
                embed
            ],

            components:
                buildTicketControls(
                    initialAIStatus
                ),

            allowedMentions: {

                users: [
                    user.id
                ],

                roles: [
                    settings.support_role_id
                ]

            }

        });


        await createStaffLogThread(
            channel,
            settings
        );


        await sendLog(

            guild,

            settings,

            new EmbedBuilder()

                .setTitle(
                    "> A new ticket has been opened."
                )

                .addFields(

                    {

                        name:
                            "• Created",

                        value:
                            `<t:${Math.floor(Date.now() / 1000)}:F>`

                    },

                    {

                        name:
                            "• Type",

                        value:
                            `> ${ticketType.label}`

                    },

                    {

                        name:
                            "• User",

                        value:
                            `> ${user} (${user.id})`

                    },

                    {

                        name:
                            "• Channel",

                        value:
                            `> ${channel}`

                    }

                )

                .setColor(
                    CONFIG.colors.success
                )

                .setTimestamp(),

            [

                new ActionRowBuilder()

                    .addComponents(

                        new ButtonBuilder()

                            .setCustomId(
                                "ticket:log:ai-status"
                            )

                            .setLabel(

                                initialAIStatus
                                    ? "AI Status • ON"
                                    : "AI Status • OFF"

                            )

                            .setEmoji(
                                "🤖"
                            )

                            .setStyle(

                                initialAIStatus
                                    ? ButtonStyle.Success
                                    : ButtonStyle.Secondary

                            )

                            .setDisabled(
                                true
                            )

                    )

            ]

        );


        const responseEmbed =
            new EmbedBuilder()

                .setTitle("VaultX 〢 Ticket Created")
                .setDescription([
                    `> **Ticket** ${channel}`,
                    '',
                    `• AI 〢 ${initialAIStatus ? 'Online' : 'Offline'}`,
                    `• Staff 〢 <@&${settings.support_role_id}>`,
                    '',
                    '〢 Your private support channel is ready.'
                ].join("\n"))

                .setColor(
                    CONFIG.colors.success
                )

                .setTimestamp();


        await interaction.editReply({

            embeds: [
                responseEmbed
            ]

        });


        console.log(

            `🎫 Ticket created | ` +

            `channel=${channel.id} | ` +

            `user=${user.tag} | ` +

            `type=${ticketType.name} | ` +

            `AI=${initialAIStatus}`

        );


    } catch (error) {

        console.error(
            "❌ Ticket creation error:",
            error
        );


        try {

            await interaction.editReply({

                content:
                    "❌ Something went wrong while creating your ticket."

            });

        } catch { }

    }

}


/*
|--------------------------------------------------------------------------
| HANDLE BUTTON
|--------------------------------------------------------------------------
*/

export async function handleTicketButton(
    interaction
) {

    if (
        !interaction.isButton()
    ) {

        return false;

    }


    if (
        !interaction.customId.startsWith(
            "ticket:"
        )
    ) {

        return false;

    }


    // Acknowledge the interaction immediately. Discord gives buttons only
    // a short window for the initial response; some ticket actions perform
    // several Discord API/database operations afterwards.
    try {
        await interaction.deferReply({
            flags: MessageFlags.Ephemeral
        });
    } catch (error) {
        if (error?.code === 10062 || error?.code === 40060) {
            console.warn(`⚠️ Ticket interaction expired before acknowledgement: ${interaction.customId}`);
            return true;
        }
        throw error;
    }


    if (
        !isTicketChannel(
            interaction.channel
        )
    ) {

        await interaction.editReply({

            content:
                "❌ This is not a valid VaultX ticket.",

            flags:
                MessageFlags.Ephemeral

        });

        return true;

    }


    const settings =
        getGuildSettings(
            interaction.guild.id
        );


    if (!settings) {

        await interaction.editReply({

            content:
                "❌ Ticket system configuration not found.",

            flags:
                MessageFlags.Ephemeral

        });

        return true;

    }


    const isStaff =
        isMemberStaff(
            interaction,
            settings
        );


    /*
    |--------------------------------------------------------------------------
    | ADD USER
    |--------------------------------------------------------------------------
    */

    if (interaction.customId === "ticket:add-user") {

        if (!isStaff) {
            await interaction.editReply({ content: "❌ Only support staff can add users to tickets.", flags: MessageFlags.Ephemeral });
            return true;
        }

        const selector = new UserSelectMenuBuilder()
            .setCustomId("ticket:access-user")
            .setPlaceholder("Select a member to add to this ticket")
            .setMinValues(1)
            .setMaxValues(1);

        await interaction.editReply({
            content: "Select the member who should receive access to this ticket.",
            components: [new ActionRowBuilder().addComponents(selector)],
            flags: MessageFlags.Ephemeral
        });
        return true;
    }


    /*
    |--------------------------------------------------------------------------
    | CLAIM
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:claim"
    ) {

        if (!isStaff) {

            await interaction.editReply({

                content:
                    "❌ Only support staff can claim tickets.",

                flags:
                    MessageFlags.Ephemeral

            });

            return true;

        }


        const claimedBy =
            getClaimedStaffId(
                interaction.channel
            );


        if (claimedBy) {

            await interaction.editReply({

                content:
                    `⚠️ This ticket is already claimed by <@${claimedBy}>.`,

                flags:
                    MessageFlags.Ephemeral

            });

            return true;

        }


        const currentTopic =
            interaction.channel.topic ?? "";


        try {

            await interaction.channel.setTopic(

                `${currentTopic}|${CONFIG.claimPrefix}${interaction.user.id}`

            );

        } catch (error) {

            console.error(
                "❌ Claim error:",
                error
            );

            await interaction.editReply({

                content:
                    "❌ Failed to claim this ticket.",

                flags:
                    MessageFlags.Ephemeral

            });

            return true;

        }


        clearAIState(
            interaction.channel.id
        );


        setTicketAIStatus(
            interaction.channel.id,
            false
        );


        setTicketEscalated(
            interaction.channel.id,
            true
        );


        updateTicketRecord(
            interaction.channel.id,
            {
                status: "claimed",
                claimed_by: interaction.user.id,
                last_staff_message_at: Date.now()
            }
        );


        try {

            await interaction.message.edit({

                components:
                    buildTicketControls(
                        false,
                        true
                    )

            });

        } catch { }


        const Embed1 =
            new EmbedBuilder()

                .setColor(
                    CONFIG.colors.info
                )

                .setDescription(
                    `Ticket claimed by **${interaction.user}**`
                );


        await interaction.editReply({

            embeds: [
                Embed1
            ],

            allowedMentions: {

                users: [
                    interaction.user.id
                ]

            }

        });


        await sendStaffClaimLog(

            interaction.channel,

            settings,

            interaction.user

        );


        debug(

            `Ticket claimed | ` +

            `ticket=${interaction.channel.id} | ` +

            `staff=${interaction.user.id} | ` +

            `claimLog=staff-thread-only`

        );


        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | PRIORITY
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:priority"
    ) {

        if (!isStaff) {

            await interaction.editReply({
                content: "❌ Only support staff can change ticket priority.",
                flags: MessageFlags.Ephemeral
            });

            return true;

        }

        const priorities = [
            "normal",
            "high",
            "urgent",
            "low"
        ];

        const current =
            getTicketRecord(interaction.channel.id)?.priority ?? "normal";

        const next =
            priorities[
                (priorities.indexOf(current) + 1) % priorities.length
            ];

        updateTicketRecord(
            interaction.channel.id,
            {
                priority: next,
                last_staff_message_at: Date.now()
            }
        );

        await interaction.editReply({
            content: `⚡ Ticket priority changed to **${next}**.`,
            flags: MessageFlags.Ephemeral
        });

        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | STATUS
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:status"
    ) {

        if (!isStaff) {

            await interaction.editReply({
                content: "❌ Only support staff can change ticket status.",
                flags: MessageFlags.Ephemeral
            });

            return true;

        }

        const statuses = [
            "open",
            "claimed",
            "waiting",
            "escalated",
            "resolved"
        ];

        const current =
            getTicketRecord(interaction.channel.id)?.status ?? "open";

        const next =
            statuses[
                (statuses.indexOf(current) + 1) % statuses.length
            ];

        updateTicketRecord(
            interaction.channel.id,
            {
                status: next,
                last_staff_message_at: Date.now()
            }
        );

        await interaction.editReply({
            content: `🔄 Ticket status changed to **${next}**.`,
            flags: MessageFlags.Ephemeral
        });

        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | AI TOGGLE
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:ai"
    ) {

        if (!isStaff) {

            await interaction.editReply({

                content:
                    "❌ Only support staff can control AI.",

                flags:
                    MessageFlags.Ephemeral

            });

            return true;

        }


        const globalAIEnabled =
            Boolean(
                isAIEnabled(
                    interaction.guild.id
                )
            );


        const currentStatus =
            getTicketAIStatus(
                interaction.channel.id
            );


        const wasEnabled =
            Boolean(
                currentStatus?.enabled
            );


        if (
            !wasEnabled &&
            !globalAIEnabled
        ) {

            await interaction.editReply({

                content:
                    "❌ Global AI is disabled. Enable AI globally before enabling it for this ticket.",

                flags:
                    MessageFlags.Ephemeral

            });

            return true;

        }


        const newStatus =
            toggleTicketAI(
                interaction.channel.id
            );


        debug(

            `AI toggle | ` +

            `ticket=${interaction.channel.id} | ` +

            `old=${wasEnabled} | ` +

            `new=${newStatus} | ` +

            `global=${globalAIEnabled}`

        );


        if (newStatus) {

            setTicketEscalated(
                interaction.channel.id,
                false
            );


            clearAIState(
                interaction.channel.id
            );


            const embed =
                new EmbedBuilder()

                    .addFields({

                        name:
                            "• AI Status",

                        value:
                            `> The AI assistant will now process incoming messages in\n> this ticket. It can provide instant assistance and escalate\n> the conversation when human support is required.`

                    })

                    .setTitle(
                        "Be as specific as possible when describing your request."
                    )

                    .addFields(

                        {

                            name:
                                "• Status",

                            value:
                                "> Online",

                            inline:
                                true

                        },

                        {

                            name:
                                "• Mode",

                            value:
                                "> AI Support",

                            inline:
                                true

                        },

                        {

                            name:
                                "• Escalation",

                            value:
                                "> Available",

                            inline:
                                true

                        }

                    )

                    .setColor(
                        CONFIG.colors.success
                    );


            await interaction.channel.send({

                embeds: [
                    embed
                ]

            });

        } else {

            clearAIState(
                interaction.channel.id
            );


            const embed =
                new EmbedBuilder()

                    .addFields({

                        name:
                            "• AI Status",

                        value:
                            `> The AI assistant will no longer\n> respond to new messages in this\n> ticket.`

                    })

                    .setDescription(
                        "> Use **/ai-resume** to restore AI"
                    )

                    .addFields(

                        {

                            name:
                                "• Status",

                            value:
                                "> Offline",

                            inline:
                                true

                        },

                        {

                            name:
                                "• Mode",

                            value:
                                "> Staff Support",

                            inline:
                                true

                        }

                    )

                    .setColor(
                        CONFIG.colors.danger
                    );


            await interaction.channel.send({

                embeds: [
                    embed
                ]

            });

        }


        try {

            await interaction.message.edit({

                components:
                    buildTicketControls(

                        Boolean(newStatus),

                        Boolean(

                            getClaimedStaffId(
                                interaction.channel
                            )

                        )

                    )

            });

        } catch (error) {

            console.error(
                "❌ Failed to update AI button:",
                error
            );

        }


        await sendStaffAILog(

            interaction.channel,

            settings,

            interaction.user,

            Boolean(newStatus),

            globalAIEnabled

        );


        await interaction.editReply({

            content:

                newStatus

                    ? "🤖 AI Support is now **ONLINE**."

                    : "🔴 AI Support is now **OFFLINE**.",

            flags:
                MessageFlags.Ephemeral

        });


        debug(

            `AI status changed | ` +

            `ticket=${interaction.channel.id} | ` +

            `status=${newStatus} | ` +

            `aiLog=staff-thread-only`

        );


        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | CLOSE
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:close"
    ) {

        const ownerId =
            getTicketOwnerId(
                interaction.channel
            );


        if (
            !isStaff &&
            ownerId !== interaction.user.id
        ) {

            await interaction.editReply({

                content:
                    "❌ Only the ticket owner or support staff can close this ticket.",

                flags:
                    MessageFlags.Ephemeral

            });

            return true;

        }


        const embed =
            new EmbedBuilder()

                .setDescription(

                    [

                        "### • Are you sure you want to close this ticket ?",

                        "> A transcript will be generated before the ticket is deleted.",

                        "> AI processing will be stopped.",

                        "> The channel will then be permanently removed."

                    ].join("\n")

                )

                .setColor(
                    CONFIG.colors.warning
                );


        await interaction.editReply({

            embeds: [
                embed
            ],

            components: [

                buildCloseConfirmation()

            ],

            flags:
                MessageFlags.Ephemeral

        });


        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | CANCEL CLOSE
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:close:cancel"
    ) {

        await interaction.editReply({

            content:
                "↩️ **Ticket close cancelled.**",

            embeds: [],

            components: []

        });


        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | CONFIRM CLOSE
    |--------------------------------------------------------------------------
    */

    if (
        interaction.customId ===
        "ticket:close:confirm"
    ) {

        const ownerId =
            getTicketOwnerId(
                interaction.channel
            );


        if (
            !isStaff &&
            ownerId !== interaction.user.id
        ) {

            await interaction.editReply({

                content:
                    "❌ You cannot close this ticket.",

                embeds: [],

                components: []

            });

            return true;

        }


        const aiStatus =
            getTicketAIStatus(
                interaction.channel.id
            );


        setTicketAIStatus(
            interaction.channel.id,
            false
        );


        setTicketEscalated(
            interaction.channel.id,
            true
        );


        updateTicketRecord(
            interaction.channel.id,
            {
                status: "closed",
                closed_at: Date.now(),
                last_staff_message_at: Date.now()
            }
        );


        clearAIState(
            interaction.channel.id
        );


        /*
        |--------------------------------------------------------------------------
        | CREATE TRANSCRIPT
        |--------------------------------------------------------------------------
        */

        let transcript = null;

        let transcriptArchived = false;


        try {

            transcript =
                await createTranscript(
                    interaction.channel
                );

        } catch (error) {

            console.error(
                "❌ Transcript error:",
                error
            );

            transcript = [
                "VAULTX TRANSCRIPT FALLBACK",
                `Channel: #${interaction.channel.name}`,
                `Channel ID: ${interaction.channel.id}`,
                `Generated: ${new Date().toISOString()}`,
                "",
                "The message history could not be fetched before closure."
            ].join("\n");

        }


        /*
        |--------------------------------------------------------------------------
        | SEND TRANSCRIPT
        |--------------------------------------------------------------------------
        |
        | IMPORTANT:
        |
        | Το transcript ΔΕΝ θα μείνει σαν απλό attachment
        | κάτω από το embed.
        |
        | Η sendTranscript() δημιουργεί το message,
        | παίρνει το attachment URL και προσθέτει
        | Link Button:
        |
        | 📄 Download Transcript
        |
        |--------------------------------------------------------------------------
        */

        if (transcript) {

            transcriptArchived = await sendTranscript(

                interaction.guild,

                settings,

                transcript,

                interaction.channel.name

            );

        }


        const closeLogSent = await sendCloseLog(

            interaction.guild,

            settings,

            interaction.channel,

            interaction.user,

            transcriptArchived

        );


        if (!closeLogSent) {

            console.warn(
                `⚠️ Close log was not sent | ticket=${interaction.channel.id}`
            );

        }


        /*
        |--------------------------------------------------------------------------
        | DATABASE CLEANUP
        |--------------------------------------------------------------------------
        */

        try {

            deleteTicketAIStatus(
                interaction.channel.id
            );

        } catch (error) {

            console.error(
                "❌ Failed to delete ticket status:",
                error
            );

        }


        /*
        |--------------------------------------------------------------------------
        | FINAL RESPONSE
        |--------------------------------------------------------------------------
        */

        const closeEmbed =
            new EmbedBuilder()

                .setDescription(

                    `The ticket will be closed in **${CONFIG.deleteDelay / 1000}** seconds !`

                )

                .setColor(
                    CONFIG.colors.danger
                );


        await interaction.editReply({

            content:
                "",

            embeds: [

                closeEmbed

            ],

            components: []

        });


        /*
        |--------------------------------------------------------------------------
        | DELETE CHANNEL
        |--------------------------------------------------------------------------
        */

        setTimeout(

            async () => {

                try {

                    await interaction.channel.delete(
                        "VaultX ticket closed"
                    );

                } catch (error) {

                    console.error(
                        "❌ Failed to delete ticket channel:",
                        error
                    );

                }

            },

            CONFIG.deleteDelay

        );


        return true;

    }


    return true;

}


/*
|--------------------------------------------------------------------------
| CREATE TRANSCRIPT
|--------------------------------------------------------------------------
*/

async function createTranscript(
    channel
) {

    const messages = [];

    let lastId = null;


    while (true) {

        const fetched =
            await channel.messages.fetch({

                limit: 100,

                ...(lastId
                    ? {
                        before: lastId
                    }
                    : {})

            });


        if (
            fetched.size === 0
        ) {

            break;

        }


        messages.push(
            ...fetched.values()
        );


        lastId =
            fetched.last().id;


        if (
            fetched.size < 100
        ) {

            break;

        }

    }


    messages.reverse();


    const lines = [

        "========================================",

        "             VAULTX TRANSCRIPT",

        "========================================",

        `Channel: #${channel.name}`,

        `Channel ID: ${channel.id}`,

        `Generated: ${new Date().toISOString()}`,

        "========================================",

        ""

    ];


    for (
        const message of messages
    ) {

        const timestamp =
            message.createdAt?.toISOString()
            ?? new Date().toISOString();


        const username =
            message.author?.tag
            ?? "Unknown";


        let content =
            message.content
            ?? "";


        if (
            message.attachments?.size
        ) {

            const attachments =
                message.attachments

                    .map(
                        attachment =>
                            `[Attachment: ${attachment.url}]`
                    )

                    .join(" ");


            content =
                content

                    ? `${content} ${attachments}`

                    : attachments;

        }


        if (!content) {

            content =
                message.embeds?.length

                    ? "[Embed]"

                    : "[No text]";

        }


        lines.push(

            `[${timestamp}] ${username}: ${content}`

        );

    }


    lines.push(

        "",

        "========================================",

        "          END OF TRANSCRIPT",

        "========================================"

    );


    return lines.join("\n");

}


/*
|--------------------------------------------------------------------------
| SEND GLOBAL LOG
|--------------------------------------------------------------------------
*/

async function sendLog(
    guild,
    settings,
    embed,
    components = []
) {

    if (
        !settings?.logs_channel_id
    ) {

        return;

    }


    const channel =
        guild.channels.cache.get(
            settings.logs_channel_id
        );


    if (!channel) {

        console.warn(

            `⚠️ Logs channel ${settings.logs_channel_id} was not found.`

        );

        return;

    }


    try {

        await channel.send({

            embeds: [
                embed
            ],

            components:
                components

        });

    } catch (error) {

        console.error(
            "❌ Failed to send ticket log:",
            error
        );

    }

}


/*
|--------------------------------------------------------------------------
| SEND CLOSE LOG
|--------------------------------------------------------------------------
*/

async function sendCloseLog(
    guild,
    settings,
    channel,
    closer,
    transcriptCreated
) {

    if (
        !settings?.close_logs_channel_id
    ) {

        console.warn(
            "⚠️ Close logs channel is not configured."
        );

        return false;

    }


    let closeLogsChannel =
        guild.channels.cache.get(
            settings.close_logs_channel_id
        );


    if (!closeLogsChannel) {

        try {

            closeLogsChannel =
                await guild.channels.fetch(
                    settings.close_logs_channel_id
                );

        } catch (error) {

            console.error(
                "❌ Failed to fetch close logs channel:",
                error
            );

        }

    }


    if (
        !closeLogsChannel ||
        closeLogsChannel.type !== ChannelType.GuildText
    ) {

        console.warn(
            `⚠️ Close logs channel ${settings.close_logs_channel_id} was not found.`
        );

        return false;

    }


    const ticketRecord =
        getTicketRecord(
            channel.id
        );


    const ownerId =
        getTicketOwnerId(
            channel
        );


    try {

        await closeLogsChannel.send({

            embeds: [

                new EmbedBuilder()

                    .setTitle("VaultX 〢 Ticket Closed")

                    .addFields(

                        {

                            name: "• Closed",

                            value:
                                `<t:${Math.floor(Date.now() / 1000)}:F>`,

                            inline:
                                false

                        },

                        {

                            name: "• User",

                            value:
                                ownerId
                                    ? `> <@${ownerId}> (${ownerId})`
                                    : "> Unknown",

                            inline:
                                false

                        },

                        {

                            name: "• Closed by",

                            value:
                                `> ${closer} (${closer.id})`,

                        },

                        {

                            name: "• Transcript",

                            value:
                                transcriptCreated
                                    ? "> Archived successfully"
                                    : "> Could not be generated",

                            inline:
                                true

                        }

                    )

                    .setColor(
                        CONFIG.colors.danger
                    )

                    .setTimestamp()

                    .setFooter({

                        text:
                            "VaultX • Ticket lifecycle log"

                    })

            ],

            allowedMentions: {

                parse: []

            }

        });


        debug(
            `Close log sent | ticket=${channel.id} | channel=${closeLogsChannel.id}`
        );


        return true;

    } catch (error) {

        console.error(
            "❌ Failed to send close ticket log:",
            error
        );

        return false;

    }

}


/*
|--------------------------------------------------------------------------
| SEND TRANSCRIPT
|--------------------------------------------------------------------------
|
| ⭐ NEW VERSION
|
| Το transcript ανεβαίνει ως attachment,
| αλλά το embed παίρνει LINK BUTTON που
| οδηγεί απευθείας στο attachment.
|
|--------------------------------------------------------------------------
*/

async function sendTranscript(
    guild,
    settings,
    transcript,
    ticketName
) {

    if (!settings?.transcripts_channel_id) {

        console.warn(
            "⚠️ Transcript logs channel is not configured."
        );

        return false;

    }


    let channel =
        guild.channels.cache.get(
            settings.transcripts_channel_id
        );


    if (!channel) {

        try {

            channel =
                await guild.channels.fetch(
                    settings.transcripts_channel_id
                );

        } catch (error) {

            console.error(
                "❌ Failed to fetch transcript channel:",
                error
            );

        }

    }


    if (
        !channel ||
        channel.type !== ChannelType.GuildText
    ) {

        console.warn(

            `⚠️ Transcript logs channel ${settings.transcripts_channel_id} was not found or is not a text channel.`

        );

        return false;

    }


    try {

        const buffer =
            Buffer.from(
                transcript,
                "utf8"
            );


        let message;

        try {

            message =
                await channel.send({

                embeds: [

                    new EmbedBuilder()

                        .setTitle(
                            "VaultX 〢 Transcript"
                        )

                        .addFields(

                            {

                                name:
                                    "• Ticket Name",

                                value:
                                    `\`${ticketName}\``,

                                inline:
                                    true

                            },

                            {

                                name:
                                    "• Generated",

                                value:
                                    `<t:${Math.floor(Date.now() / 1000)}:F>`,

                                inline:
                                    true

                            }

                        )

                        .setColor(
                            CONFIG.colors.primary
                        )

                        .setTimestamp()

                        .setFooter({

                            text:
                                "Click the button below to view/download the transcript"

                        })

                ],

                files: [

                    {

                        attachment:
                            buffer,

                        name:
                            `${ticketName}-transcript.txt`

                    }

                ]

                });

        } catch (error) {

            console.error(
                "❌ Transcript attachment upload failed:",
                error
            );

            const chunks =
                transcript.match(/[\s\S]{1,1900}/g) ?? [];

            await channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("VaultX 〢 Transcript • Fallback")
                        .setDescription(
                            `Attachment upload failed. Transcript follows in ${chunks.length} message(s).`
                        )
                        .setColor(CONFIG.colors.warning)
                        .setTimestamp()
                ]
            });

            for (const chunk of chunks) {

                await channel.send({
                    content:
                        `${String.fromCharCode(96).repeat(3)}text\n` +
                        `${chunk}\n` +
                        String.fromCharCode(96).repeat(3)
                });

            }

            return true;

        }


        const attachment =
            message.attachments.first();


        if (!attachment?.url) {

            console.error(
                "❌ Transcript attachment URL was not generated."
            );

            return false;

        }


        const downloadButton =
            new ButtonBuilder()

                .setLabel(
                    "Download Transcript"
                )

                .setEmoji(
                    "📄"
                )

                .setStyle(
                    ButtonStyle.Link
                )

                .setURL(
                    attachment.url
                );


        const row =
            new ActionRowBuilder()

                .addComponents(
                    downloadButton
                );


        await message.edit({

            components: [
                row
            ]

        });


        debug(

            `Transcript archived | ` +
            `ticket=${ticketName} | ` +
            `channel=${channel.id} | ` +
            `message=${message.id}`

        );


        return true;


    } catch (error) {

        console.error(
            "❌ Failed to send transcript:",
            error
        );

        return false;

    }

}


/*
|--------------------------------------------------------------------------
| EXPORTS
|--------------------------------------------------------------------------
*/

export {

    buildTicketControls,

    isTicketChannel,

    getTicketOwnerId

};
export async function handleTicketAccessSelect(interaction) {

    if (!interaction.isUserSelectMenu() || interaction.customId !== "ticket:access-user") return false;

    try {
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    } catch (error) {
        if (error?.code === 10062 || error?.code === 40060) return true;
        throw error;
    }
    if (!isTicketChannel(interaction.channel)) {
        await interaction.editReply({ content: "❌ This is not a valid ticket.", flags: MessageFlags.Ephemeral });
        return true;
    }

    const settings = getGuildSettings(interaction.guild.id);
    if (!isMemberStaff(interaction, settings)) {
        await interaction.editReply({ content: "❌ Only support staff can manage ticket access.", flags: MessageFlags.Ephemeral });
        return true;
    }

    const userId = interaction.values[0];
    const member = await interaction.guild.members.fetch(userId).catch(() => null);
    if (!member || member.user.bot) {
        await interaction.editReply({ content: "❌ That member could not be found.", flags: MessageFlags.Ephemeral });
        return true;
    }

    await interaction.channel.permissionOverwrites.edit(userId, {
        ViewChannel: true, SendMessages: true, ReadMessageHistory: true, AttachFiles: true, EmbedLinks: true
    });

    await interaction.editReply({
        content: `✅ ${member} now has access to this ticket.`,
        flags: MessageFlags.Ephemeral,
        allowedMentions: { users: [userId] }
    });
    return true;
}

