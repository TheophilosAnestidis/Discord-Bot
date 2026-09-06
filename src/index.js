import "dotenv/config";

import {
    Client,
    GatewayIntentBits,
    Collection,
    MessageFlags
} from "discord.js";

import fs from "node:fs";
import path from "node:path";

import {
    fileURLToPath,
    pathToFileURL
} from "node:url";


/*
|--------------------------------------------------------------------------
| AI CONTROLLER
|--------------------------------------------------------------------------
*/

import {
    handleAIMessage
} from "./controllers/aiController.js";


/*
|--------------------------------------------------------------------------
| TICKET HANDLER
|--------------------------------------------------------------------------
*/

import {
    handleTicketButton,
    handleTicketAccessSelect,
    createTicket
} from "./handlers/ticketHandler.js";

import {
    handleSetupModal,
    handleSetupMenu
} from "./commands/setup.js";

import {
    startDashboard
} from "./dashboard/dashboard.js";

import { getInactiveTickets, updateTicketRecord } from "./database/database.js";
import { startActivityServer } from "./activityServer.js";


/*
|--------------------------------------------------------------------------
| PATHS
|--------------------------------------------------------------------------
*/

const __filename =
    fileURLToPath(import.meta.url);

const __dirname =
    path.dirname(__filename);


/*
|--------------------------------------------------------------------------
| CLIENT
|--------------------------------------------------------------------------
*/

const client =
    new Client({

        intents: [

            GatewayIntentBits.Guilds,

            GatewayIntentBits.GuildMessages,

            GatewayIntentBits.MessageContent,

            GatewayIntentBits.GuildPresences

        ]

    });


function isExpiredInteractionError(error) {

    return [
        10062,
        40060
    ].includes(
        error?.code
    );

}


/*
|--------------------------------------------------------------------------
| COMMAND COLLECTION
|--------------------------------------------------------------------------
*/

client.commands =
    new Collection();


/*
|--------------------------------------------------------------------------
| LOAD COMMANDS
|--------------------------------------------------------------------------
*/

async function loadCommands() {

    const commandsPath =
        path.join(
            __dirname,
            "commands"
        );


    if (
        !fs.existsSync(
            commandsPath
        )
    ) {

        console.warn(
            "⚠️ Commands folder not found."
        );

        return;

    }


    const commandFiles =
        fs
            .readdirSync(
                commandsPath
            )
            .filter(
                file =>
                    file.endsWith(".js")
            );

    const loadableCommandFiles = commandFiles;


    for (
        const file of loadableCommandFiles
    ) {

        try {

            const filePath =
                path.join(
                    commandsPath,
                    file
                );


            const command =
                await import(
                    pathToFileURL(
                        filePath
                    ).href
                );


            if (
                !command.data ||
                !command.execute
            ) {

                console.warn(
                    `⚠️ Skipping ${file}: missing data or execute`
                );

                continue;

            }


            client.commands.set(
                command.data.name,
                command
            );


            console.log(
                `📦 Loaded command: /${command.data.name}`
            );


        } catch (error) {

            console.error(
                `❌ Failed to load command ${file}:`,
                error
            );

        }

    }

}


/*
|--------------------------------------------------------------------------
| LOAD HANDLERS
|--------------------------------------------------------------------------
*/

async function loadHandlers() {

    const handlersPath =
        path.join(
            __dirname,
            "handlers"
        );


    if (
        !fs.existsSync(
            handlersPath
        )
    ) {

        console.warn(
            "⚠️ Handlers folder not found."
        );

        return;

    }


    const handlerFiles =
        fs
            .readdirSync(
                handlersPath
            )
            .filter(
                file =>
                    file.endsWith(".js")
            );


    for (
        const file of handlerFiles
    ) {

        console.log(
            `📦 Found handler: ${file}`
        );

    }

}


/*
|--------------------------------------------------------------------------
| READY
|--------------------------------------------------------------------------
*/

client.once(
    "clientReady",
    () => {

        console.log("");

        console.log(
            "=========================================="
        );

        console.log(
            `✅ Logged in as ${client.user.tag}`
        );

        console.log(
            "🤖 VaultX AI Ticket Bot is online!"
        );

        console.log(
            `📦 Commands loaded: ${client.commands.size}`
        );

        console.log(
            "🎫 Ticket system loaded!"
        );

        console.log(
            "🧠 AI Controller loaded!"
        );

        console.log(
            "👥 Staff escalation system loaded!"
        );

        console.log(
            "=========================================="
        );

        console.log("");

    }
);


/*
|--------------------------------------------------------------------------
| MESSAGE CREATE
|--------------------------------------------------------------------------
|
| ALL AI MESSAGE PROCESSING IS HANDLED BY aiController.js.
|
| Do NOT put generateAIResponse() directly inside this event.
|
|--------------------------------------------------------------------------
*/

client.on(
    "messageCreate",
    async message => {

        /*
         * Ignore bots immediately.
         */
        if (
            message.author?.bot
        ) {

            return;

        }


        /*
         * Ignore DMs.
         *
         * The AI system works inside guild tickets.
         */
        if (
            !message.guild
        ) {

            return;

        }


        try {

            await handleAIMessage({

                message

            });

        } catch (error) {

            console.error(
                "❌ AI Controller error:",
                error
            );

        }

    }
);


/*
|--------------------------------------------------------------------------
| INTERACTIONS
|--------------------------------------------------------------------------
*/

client.on(
    "interactionCreate",
    async interaction => {

        if (
            interaction.isStringSelectMenu() &&
            interaction.customId.startsWith("ticket:setup:menu:")
        ) {

            try {

                await handleSetupMenu(
                    interaction
                );

            } catch (error) {

                console.error(
                    "❌ Ticket setup menu error:",
                    error
                );

                if (
                    !interaction.replied &&
                    !interaction.deferred
                ) {

                    await interaction.reply({
                        content: "❌ Something went wrong while opening that setup action.",
                        ephemeral: true
                    });

                }

            }

            return;

        }

        if (interaction.isUserSelectMenu() && interaction.customId === "ticket:access-user") {
            try {
                await handleTicketAccessSelect(interaction);
            } catch (error) {
                console.error("❌ Ticket access selector error:", error);
                if (!interaction.replied && !interaction.deferred) {
                    await interaction.reply({ content: "❌ Failed to update ticket access.", flags: MessageFlags.Ephemeral });
                }
            }
            return;
        }

        if (
            interaction.isModalSubmit()
        ) {

            try {

                await handleSetupModal(
                    interaction
                );

            } catch (error) {

                console.error(
                    "❌ Ticket setup modal error:",
                    error
                );

                if (
                    !interaction.replied &&
                    !interaction.deferred
                ) {

                    await interaction.reply({
                        content: "❌ Something went wrong while saving the ticket setup.",
                        ephemeral: true
                    });

                }

            }

            return;

        }


        /*
        |----------------------------------------------------------------------
        | BUTTONS
        |----------------------------------------------------------------------
        */

        if (
            interaction.isButton()
        ) {

            const customId =
                interaction.customId;


            /*
            |------------------------------------------------------------------
            | CREATE TICKET
            |------------------------------------------------------------------
            */

            if (
                customId.startsWith(
                    "ticket:create:"
                )
            ) {

                /*
                 * Defer immediately.
                 *
                 * Ticket creation may perform multiple
                 * Discord API requests.
                 */

                try {

                    await interaction.deferReply({

                        flags:
                            MessageFlags.Ephemeral

                    });

                } catch (error) {

                    if (
                        isExpiredInteractionError(
                            error
                        )
                    ) {

                        console.warn(
                            "⚠️ Ignored expired ticket button interaction."
                        );

                    } else {

                        console.error(
                            "❌ Failed to defer ticket creation interaction:",
                            error
                        );

                    }

                    return;

                }


                try {

                    const type =
                        customId.split(":")[2];


                    await createTicket(
                        interaction,
                        type
                    );


                } catch (error) {

                    console.error(
                        "❌ Ticket creation error:",
                        error
                    );


                    const response = {

                        content:
                            "❌ I couldn't create the ticket.",

                        flags:
                            MessageFlags.Ephemeral

                    };


                    try {

                        if (
                            interaction.deferred ||
                            interaction.replied
                        ) {

                            await interaction.editReply(
                                response
                            );

                        } else {

                            await interaction.reply(
                                response
                            );

                        }

                    } catch (replyError) {

                        console.error(
                            "❌ Failed to send ticket creation error response:",
                            replyError
                        );

                    }

                }

                return;

            }


            /*
            |------------------------------------------------------------------
            | OTHER TICKET BUTTONS
            |------------------------------------------------------------------
            */

            if (
                customId.startsWith(
                    "ticket:"
                )
            ) {

                console.log(
                    `🔘 Ticket button pressed: ${customId}`
                );


                try {

                    await handleTicketButton(
                        interaction
                    );


                } catch (error) {

                    if (
                        isExpiredInteractionError(
                            error
                        )
                    ) {

                        console.warn(
                            "⚠️ Ignored expired ticket interaction."
                        );

                        return;

                    }

                    console.error(
                        "❌ Ticket button error:",
                        error
                    );


                    const response = {

                        content:
                            "❌ Something went wrong while handling this ticket.",

                        flags:
                            MessageFlags.Ephemeral

                    };


                    try {

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

                    } catch (replyError) {

                        if (
                            isExpiredInteractionError(
                                replyError
                            )
                        ) {

                            return;

                        }

                        console.error(
                            "❌ Failed to send button error response:",
                            replyError
                        );

                    }

                }

                return;

            }

        }


        /*
        |----------------------------------------------------------------------
        | SLASH COMMANDS
        |----------------------------------------------------------------------
        */

        if (
            !interaction.isChatInputCommand()
        ) {

            return;

        }


        const command =
            client.commands.get(interaction.commandName);


        if (!command) {

            console.warn(
                `⚠️ Unknown command: /${interaction.commandName}`
            );

            return;

        }


        try {
            const startedAt = performance.now();
            await command.execute(interaction);
            const elapsed = performance.now() - startedAt;
            if (elapsed > 300) console.warn(`🐢 Slow command /${interaction.commandName}: ${elapsed.toFixed(0)}ms`);


        } catch (error) {

            if (
                isExpiredInteractionError(
                    error
                )
            ) {

                console.warn(
                    `⚠️ Ignored expired /${interaction.commandName} interaction.`
                );

                return;

            }

            console.error(
                `❌ Error in /${interaction.commandName}:`,
                error
            );


            const response = {

                content:
                    "❌ Something went wrong while executing this command.",

                flags:
                    MessageFlags.Ephemeral

            };


            try {

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

            } catch (replyError) {

                if (
                    isExpiredInteractionError(
                        replyError
                    )
                ) {

                    return;

                }

                console.error(
                    "❌ Failed to send command error response:",
                    replyError
                );

            }

        }

    }
);


/*
|--------------------------------------------------------------------------
| DISCORD ERRORS
|--------------------------------------------------------------------------
*/

client.on(
    "error",
    error => {

        console.error(
            "❌ Discord error:",
            error
        );

    }
);


/*
|--------------------------------------------------------------------------
| PROCESS ERRORS
|--------------------------------------------------------------------------
*/

process.on(
    "unhandledRejection",
    error => {

        console.error(
            "❌ Unhandled rejection:",
            error
        );

    }
);


process.on(
    "uncaughtException",
    error => {

        console.error(
            "❌ Uncaught exception:",
            error
        );

    }
);



function startTicketAutoClose() {
    const hours = Math.max(0, Number(process.env.TICKET_AUTO_CLOSE_HOURS || 24));
    if (!hours) return;
    const run = async () => {
        const cutoff = Date.now() - hours * 60 * 60 * 1000;
        for (const ticket of getInactiveTickets(cutoff, 50)) {
            const guild = client.guilds.cache.get(ticket.guild_id);
            const channel = guild?.channels.cache.get(ticket.channel_id);
            if (!channel) { updateTicketRecord(ticket.channel_id, { status: "closed", closed_at: Date.now() }); continue; }
            try {
                await channel.send({ content: `〢 **Ticket auto-closed**\n> No activity for ${hours}h.` });
                updateTicketRecord(ticket.channel_id, { status: "closed", closed_at: Date.now() });
                await channel.setArchived?.(true).catch(() => { });
                await channel.delete("VaultX automatic ticket closure").catch(() => { });
            } catch (error) { console.warn("Auto-close failed:", error.message); }
        }
    };
    setInterval(run, 15 * 60 * 1000).unref();
    setTimeout(run, 20_000).unref();
}

/*
|--------------------------------------------------------------------------
| STARTUP
|--------------------------------------------------------------------------
*/

async function start() {

    /*
     * Check Discord token.
     */

    if (
        !process.env.BOT_TOKEN
    ) {

        console.error(
            "❌ BOT_TOKEN is missing from .env"
        );

        process.exit(
            1
        );

    }


    /*
     * Load commands.
     */

    await loadCommands();


    /*
     * Load handlers.
     */

    await loadHandlers();


    /*
     * Login.
     */

    try {

        await client.login(
            process.env.BOT_TOKEN
        );

        startDashboard(client);
        startActivityServer();
        startTicketAutoClose();

    } catch (error) {

        console.error(
            "❌ Discord login failed:",
            error
        );

        process.exit(
            1
        );

    }

}


/*
|--------------------------------------------------------------------------
| START
|--------------------------------------------------------------------------
*/

await start();