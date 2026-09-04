import "dotenv/config";

import {
    REST,
    Routes
} from "discord.js";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandsPath = path.join(__dirname, "commands");

const commandFiles = fs
    .readdirSync(commandsPath)
    .filter(file => file.endsWith(".js"));

const deployableCommandFiles = commandFiles;

const commands = [];

for (const file of deployableCommandFiles) {

    const filePath = path.join(commandsPath, file);

    const command = await import(
        pathToFileURL(filePath).href
    );

    if (!command.data) {
        console.warn(
            `⚠️ Skipping ${file}: missing command data`
        );

        continue;
    }

    commands.push(
        command.data.toJSON()
    );

    console.log(
        `📦 Preparing /${command.data.name}`
    );
}

const rest = new REST({
    version: "10"
}).setToken(
    process.env.BOT_TOKEN
);

try {

    console.log("");
    console.log("🚀 Registering slash commands...");

    await rest.put(
        Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID
        ),
        {
            body: commands
        }
    );

    console.log(
        `✅ Successfully registered ${commands.length} command(s)!`
    );

} catch (error) {

    console.error(
        "❌ Failed to register commands:"
    );

    console.error(error);
}