import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";


/*
|--------------------------------------------------------------------------
| DATABASE PATH
|--------------------------------------------------------------------------
*/

const dataFolder =
    path.join(
        process.cwd(),
        "data"
    );


if (!fs.existsSync(dataFolder)) {

    fs.mkdirSync(
        dataFolder,
        {
            recursive: true
        }
    );

}


const dbPath =
    path.join(
        dataFolder,
        "vaultx.db"
    );


const db =
    new Database(
        dbPath
    );


/*
|--------------------------------------------------------------------------
| SQLITE SETTINGS
|--------------------------------------------------------------------------
*/

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.pragma("busy_timeout = 5000");


/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

function columnExists(
    tableName,
    columnName
) {

    const columns =
        db.prepare(
            `PRAGMA table_info(${tableName})`
        ).all();

    return columns.some(
        column =>
            column.name === columnName
    );

}


function addColumnIfMissing(
    tableName,
    columnName,
    definition
) {

    if (
        !columnExists(
            tableName,
            columnName
        )
    ) {

        db.exec(`
            ALTER TABLE ${tableName}
            ADD COLUMN ${columnName} ${definition}
        `);

        console.log(
            `🗄️ Database migration: added ${tableName}.${columnName}`
        );

    }

}


/*
|--------------------------------------------------------------------------
| GUILD SETTINGS
|--------------------------------------------------------------------------
|
| Stores the complete ticket system configuration.
|
| logs_channel_id
|     General / fallback logs.
|
| open_logs_channel_id
|     Ticket opened logs.
|
| close_logs_channel_id
|     Ticket closed logs.
|
| transcripts_channel_id
|     Transcript archive.
|
| ticket_panel_channel_id
| ticket_panel_message_id
|     Active ticket panel.
|
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE TABLE IF NOT EXISTS guild_settings (

        guild_id TEXT PRIMARY KEY,

        support_role_id TEXT,

        ticket_category_id TEXT,

        logs_channel_id TEXT,

        open_logs_channel_id TEXT,

        close_logs_channel_id TEXT,

        transcripts_channel_id TEXT,

        panel_target_channel_id TEXT,

        ticket_panel_channel_id TEXT,

        ticket_panel_message_id TEXT,

        ai_enabled INTEGER NOT NULL DEFAULT 1,

        created_at INTEGER NOT NULL,

        updated_at INTEGER NOT NULL

    );
`);


/*
|--------------------------------------------------------------------------
| GUILD SETTINGS MIGRATIONS
|--------------------------------------------------------------------------
*/

addColumnIfMissing(
    "guild_settings",
    "support_role_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "ticket_category_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "logs_channel_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "open_logs_channel_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "close_logs_channel_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "transcripts_channel_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "panel_target_channel_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "ticket_panel_channel_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "ticket_panel_message_id",
    "TEXT"
);


addColumnIfMissing(
    "guild_settings",
    "ai_enabled",
    "INTEGER NOT NULL DEFAULT 1"
);


addColumnIfMissing(
    "guild_settings",
    "created_at",
    "INTEGER NOT NULL DEFAULT 0"
);


addColumnIfMissing(
    "guild_settings",
    "updated_at",
    "INTEGER NOT NULL DEFAULT 0"
);


/*
|--------------------------------------------------------------------------
| AI MESSAGES
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE TABLE IF NOT EXISTS ai_messages (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        ticket_id TEXT NOT NULL,

        user_id TEXT,

        username TEXT,

        role TEXT NOT NULL,

        content TEXT NOT NULL,

        created_at INTEGER NOT NULL

    );
`);


/*
|--------------------------------------------------------------------------
| AI MESSAGES MIGRATION
|--------------------------------------------------------------------------
*/

addColumnIfMissing(
    "ai_messages",
    "guild_id",
    "TEXT"
);


/*
|--------------------------------------------------------------------------
| AI MESSAGE INDEXES
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE INDEX IF NOT EXISTS idx_ai_messages_ticket
    ON ai_messages(ticket_id, id);

    CREATE INDEX IF NOT EXISTS idx_ai_messages_guild
    ON ai_messages(guild_id);
`);


/*
|--------------------------------------------------------------------------
| TICKET AI STATUS
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE TABLE IF NOT EXISTS ticket_ai_status (

        ticket_id TEXT PRIMARY KEY,

        enabled INTEGER NOT NULL DEFAULT 1,

        escalated INTEGER NOT NULL DEFAULT 0,

        updated_at INTEGER NOT NULL

    );
`);


/*
|--------------------------------------------------------------------------
| TICKET AI STATUS MIGRATION
|--------------------------------------------------------------------------
*/

addColumnIfMissing(
    "ticket_ai_status",
    "guild_id",
    "TEXT"
);


/*
|--------------------------------------------------------------------------
| TICKET AI INDEX
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE INDEX IF NOT EXISTS idx_ticket_ai_guild
    ON ticket_ai_status(guild_id);
`);


/*
|--------------------------------------------------------------------------
| AI TICKET INTELLIGENCE
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE TABLE IF NOT EXISTS ticket_intelligence (
        ticket_id TEXT PRIMARY KEY,
        guild_id TEXT NOT NULL,
        category TEXT NOT NULL DEFAULT 'general',
        priority TEXT NOT NULL DEFAULT 'normal',
        sentiment TEXT NOT NULL DEFAULT 'neutral',
        confidence REAL NOT NULL DEFAULT 0,
        summary TEXT NOT NULL DEFAULT '',
        issue TEXT NOT NULL DEFAULT '',
        suggested_action TEXT NOT NULL DEFAULT '',
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_ticket_intelligence_guild
    ON ticket_intelligence(guild_id, updated_at);
`);

export function getTicketIntelligence(ticketId) {
    if (!ticketId) return null;
    return db.prepare(`
        SELECT * FROM ticket_intelligence WHERE ticket_id = ?
    `).get(ticketId) ?? null;
}

export function saveTicketIntelligence({
    ticketId, guildId, category = 'general', priority = 'normal',
    sentiment = 'neutral', confidence = 0, summary = '', issue = '',
    suggestedAction = ''
}) {
    const now = Date.now();
    db.prepare(`
        INSERT INTO ticket_intelligence (
            ticket_id, guild_id, category, priority, sentiment, confidence,
            summary, issue, suggested_action, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(ticket_id) DO UPDATE SET
            category=excluded.category, priority=excluded.priority,
            sentiment=excluded.sentiment, confidence=excluded.confidence,
            summary=excluded.summary, issue=excluded.issue,
            suggested_action=excluded.suggested_action, updated_at=excluded.updated_at
    `).run(
        ticketId, guildId, category, priority, sentiment, Number(confidence) || 0,
        summary, issue, suggestedAction, now, now
    );
    return getTicketIntelligence(ticketId);
}

/*
|--------------------------------------------------------------------------
| TICKETS
|--------------------------------------------------------------------------
*/

db.exec(`
    CREATE TABLE IF NOT EXISTS tickets (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        guild_id TEXT NOT NULL,

        channel_id TEXT NOT NULL UNIQUE,

        owner_id TEXT NOT NULL,

        type TEXT NOT NULL,

        status TEXT NOT NULL DEFAULT 'open',

        priority TEXT NOT NULL DEFAULT 'normal',

        claimed_by TEXT,

        tags TEXT NOT NULL DEFAULT '[]',

        created_at INTEGER NOT NULL,

        updated_at INTEGER NOT NULL,

        closed_at INTEGER,

        last_user_message_at INTEGER,

        last_staff_message_at INTEGER

    );

    CREATE INDEX IF NOT EXISTS idx_tickets_guild_status
    ON tickets(guild_id, status, updated_at);

    CREATE INDEX IF NOT EXISTS idx_tickets_owner
    ON tickets(guild_id, owner_id, status);
`);


/*
|--------------------------------------------------------------------------
| GUILD SETTINGS
|--------------------------------------------------------------------------
*/

/**
 * Create or update the complete ticket system setup.
 */
export function saveGuildSettings({

    guildId,

    supportRoleId = null,

    ticketCategoryId = null,

    logsChannelId = null,

    openLogsChannelId = null,

    closeLogsChannelId = null,

    transcriptsChannelId = null,

    panelTargetChannelId = null

}) {

    if (!guildId) {

        throw new Error(
            "saveGuildSettings: guildId is required."
        );

    }


    const now =
        Date.now();


    const existing =
        getGuildSettings(
            guildId
        );


    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    if (!existing) {

        db.prepare(`
            INSERT INTO guild_settings (

                guild_id,

                support_role_id,

                ticket_category_id,

                logs_channel_id,

                open_logs_channel_id,

                close_logs_channel_id,

                transcripts_channel_id,

                panel_target_channel_id,

                ticket_panel_channel_id,

                ticket_panel_message_id,

                ai_enabled,

                created_at,

                updated_at

            )

            VALUES (

                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                NULL,
                NULL,
                1,
                ?,
                ?

            )
        `).run(

            guildId,

            supportRoleId,

            ticketCategoryId,

            logsChannelId,

            openLogsChannelId,

            closeLogsChannelId,

            transcriptsChannelId,

            panelTargetChannelId,

            now,

            now

        );


        return getGuildSettings(
            guildId
        );

    }


    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    |
    | IMPORTANT:
    |
    | Existing ticket panel data is NOT deleted.
    |
    |--------------------------------------------------------------------------
    */

    db.prepare(`
        UPDATE guild_settings

        SET

            support_role_id = ?,

            ticket_category_id = ?,

            logs_channel_id = ?,

            open_logs_channel_id = ?,

            close_logs_channel_id = ?,

            transcripts_channel_id = ?,

            panel_target_channel_id = ?,

            updated_at = ?

        WHERE guild_id = ?

    `).run(

        supportRoleId,

        ticketCategoryId,

        logsChannelId,

        openLogsChannelId,

        closeLogsChannelId,

        transcriptsChannelId,

        panelTargetChannelId,

        now,

        guildId

    );


    return getGuildSettings(
        guildId
    );

}


/*
|--------------------------------------------------------------------------
| GET GUILD SETTINGS
|--------------------------------------------------------------------------
*/

export function getGuildSettings(
    guildId
) {

    if (!guildId) {

        return null;

    }


    return db.prepare(`
        SELECT *

        FROM guild_settings

        WHERE guild_id = ?

    `).get(
        guildId
    ) ?? null;

}


/*
|--------------------------------------------------------------------------
| CHECK TICKET SYSTEM CONFIGURATION
|--------------------------------------------------------------------------
*/

export function isTicketSystemConfigured(
    guildId
) {

    const settings =
        getGuildSettings(
            guildId
        );


    if (!settings) {

        return false;

    }


    return Boolean(

        settings.support_role_id &&

        settings.ticket_category_id

    );

}


/*
|--------------------------------------------------------------------------
| SAVE TICKET PANEL
|--------------------------------------------------------------------------
*/

export function saveTicketPanel(
    guildId,
    channelId,
    messageId
) {

    if (!guildId) {

        return false;

    }


    const result =
        db.prepare(`
            UPDATE guild_settings

            SET

                ticket_panel_channel_id = ?,

                ticket_panel_message_id = ?,

                updated_at = ?

            WHERE guild_id = ?

        `).run(

            channelId ?? null,

            messageId ?? null,

            Date.now(),

            guildId

        );


    return result.changes > 0;

}


/*
|--------------------------------------------------------------------------
| GET TICKET PANEL
|--------------------------------------------------------------------------
*/

export function getTicketPanel(
    guildId
) {

    if (!guildId) {

        return null;

    }


    return db.prepare(`
        SELECT

            ticket_panel_channel_id,

            ticket_panel_message_id

        FROM guild_settings

        WHERE guild_id = ?

    `).get(
        guildId
    ) ?? null;

}


/*
|--------------------------------------------------------------------------
| CLEAR TICKET PANEL
|--------------------------------------------------------------------------
*/

export function clearTicketPanel(
    guildId
) {

    if (!guildId) {

        return false;

    }


    const result =
        db.prepare(`
            UPDATE guild_settings

            SET

                ticket_panel_channel_id = NULL,

                ticket_panel_message_id = NULL,

                updated_at = ?

            WHERE guild_id = ?

        `).run(

            Date.now(),

            guildId

        );


    return result.changes > 0;

}


/*
|--------------------------------------------------------------------------
| GLOBAL AI
|--------------------------------------------------------------------------
*/

export function setAIEnabled(
    guildId,
    enabled
) {

    if (!guildId) {

        return false;

    }


    const existing =
        getGuildSettings(
            guildId
        );


    const now =
        Date.now();


    /*
    |--------------------------------------------------------------------------
    | CREATE SETTINGS IF THEY DO NOT EXIST
    |--------------------------------------------------------------------------
    */

    if (!existing) {

        db.prepare(`
            INSERT INTO guild_settings (

                guild_id,

                ai_enabled,

                created_at,

                updated_at

            )

            VALUES (

                ?,
                ?,
                ?,
                ?

            )
        `).run(

            guildId,

            enabled ? 1 : 0,

            now,

            now

        );


        return true;

    }


    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    const result =
        db.prepare(`
            UPDATE guild_settings

            SET

                ai_enabled = ?,

                updated_at = ?

            WHERE guild_id = ?

        `).run(

            enabled ? 1 : 0,

            now,

            guildId

        );


    return result.changes > 0;

}


/*
|--------------------------------------------------------------------------
| SET GUILD AI PREFERENCE
|--------------------------------------------------------------------------
*/

export function setGuildAIPreference(
    guildId,
    enabled
) {

    return setAIEnabled(
        guildId,
        enabled
    );

}


/*
|--------------------------------------------------------------------------
| CHECK GLOBAL AI
|--------------------------------------------------------------------------
*/

export function isAIEnabled(
    guildId
) {

    const settings =
        getGuildSettings(
            guildId
        );


    if (!settings) {

        return false;

    }


    return Number(
        settings.ai_enabled
    ) === 1;

}


/*
|--------------------------------------------------------------------------
| TICKET AI STATUS
|--------------------------------------------------------------------------
*/

export function initializeTicketAIStatus(
    ticketId,
    guildId
) {

    if (!ticketId) {

        throw new Error(
            "initializeTicketAIStatus: ticketId is required."
        );

    }


    if (!guildId) {

        throw new Error(
            "initializeTicketAIStatus: guildId is required."
        );

    }


    const existing =
        db.prepare(`
            SELECT *

            FROM ticket_ai_status

            WHERE ticket_id = ?

        `).get(
            ticketId
        );


    if (existing) {

        return existing;

    }


    const settings =
        getGuildSettings(
            guildId
        );


    const aiEnabled =
        settings
            ? Boolean(
                settings.ai_enabled
            )
            : true;


    const now =
        Date.now();


    db.prepare(`
        INSERT INTO ticket_ai_status (

            ticket_id,

            guild_id,

            enabled,

            escalated,

            updated_at

        )

        VALUES (

            ?,
            ?,
            ?,
            0,
            ?

        )
    `).run(

        ticketId,

        guildId,

        aiEnabled ? 1 : 0,

        now

    );


    return {

        ticket_id:
            ticketId,

        guild_id:
            guildId,

        enabled:
            aiEnabled ? 1 : 0,

        escalated:
            0,

        updated_at:
            now

    };

}


/*
|--------------------------------------------------------------------------
| INTERNAL ENSURE STATUS
|--------------------------------------------------------------------------
*/

function ensureTicketAIStatus(
    ticketId
) {

    if (!ticketId) {

        throw new Error(
            "ensureTicketAIStatus: ticketId is required."
        );

    }


    const existing =
        db.prepare(`
            SELECT *

            FROM ticket_ai_status

            WHERE ticket_id = ?

        `).get(
            ticketId
        );


    if (existing) {

        return existing;

    }


    const now =
        Date.now();


    db.prepare(`
        INSERT INTO ticket_ai_status (

            ticket_id,

            guild_id,

            enabled,

            escalated,

            updated_at

        )

        VALUES (

            ?,
            NULL,
            1,
            0,
            ?

        )
    `).run(

        ticketId,

        now

    );


    return {

        ticket_id:
            ticketId,

        guild_id:
            null,

        enabled:
            1,

        escalated:
            0,

        updated_at:
            now

    };

}


/*
|--------------------------------------------------------------------------
| GET TICKET AI STATUS
|--------------------------------------------------------------------------
*/

export function getTicketAIStatus(
    ticketId
) {

    if (!ticketId) {

        return null;

    }


    return ensureTicketAIStatus(
        ticketId
    );

}


/*
|--------------------------------------------------------------------------
| SET TICKET AI STATUS
|--------------------------------------------------------------------------
*/

export function setTicketAIStatus(
    ticketId,
    enabled
) {

    if (!ticketId) {

        return null;

    }


    ensureTicketAIStatus(
        ticketId
    );


    db.prepare(`
        UPDATE ticket_ai_status

        SET

            enabled = ?,

            updated_at = ?

        WHERE ticket_id = ?

    `).run(

        enabled ? 1 : 0,

        Date.now(),

        ticketId

    );


    return getTicketAIStatus(
        ticketId
    );

}


/*
|--------------------------------------------------------------------------
| TOGGLE TICKET AI
|--------------------------------------------------------------------------
*/

export function toggleTicketAI(
    ticketId,
    guildId = null
) {

    if (!ticketId) {

        return false;

    }


    const status =
        getTicketAIStatus(
            ticketId
        );


    if (!status) {

        return false;

    }


    const newStatus =
        !Boolean(
            status.enabled
        );


    setTicketAIStatus(
        ticketId,
        newStatus
    );


    /*
    |--------------------------------------------------------------------------
    | IMPORTANT
    |--------------------------------------------------------------------------
    |
    | We DO NOT change global AI here.
    |
    | This function only changes the current ticket.
    |
    |--------------------------------------------------------------------------
    */

    if (newStatus) {

        db.prepare(`
            UPDATE ticket_ai_status

            SET

                escalated = 0,

                updated_at = ?

            WHERE ticket_id = ?

        `).run(

            Date.now(),

            ticketId

        );

    }


    return newStatus;

}


/*
|--------------------------------------------------------------------------
| ESCALATION
|--------------------------------------------------------------------------
*/

export function setTicketEscalated(
    ticketId,
    escalated = true
) {

    if (!ticketId) {

        return null;

    }


    ensureTicketAIStatus(
        ticketId
    );


    db.prepare(`
        UPDATE ticket_ai_status

        SET

            escalated = ?,

            updated_at = ?

        WHERE ticket_id = ?

    `).run(

        escalated ? 1 : 0,

        Date.now(),

        ticketId

    );


    return getTicketAIStatus(
        ticketId
    );

}


/*
|--------------------------------------------------------------------------
| CHECK TICKET AI
|--------------------------------------------------------------------------
*/

export function isTicketAIEnabled(
    ticketId
) {

    const status =
        getTicketAIStatus(
            ticketId
        );


    if (!status) {

        return false;

    }


    if (
        Number(
            status.escalated
        ) === 1
    ) {

        return false;

    }


    return Number(
        status.enabled
    ) === 1;

}


/*
|--------------------------------------------------------------------------
| CHECK IF AI CAN RESPOND
|--------------------------------------------------------------------------
*/

export function canGuildAIRespond(
    guildId,
    ticketId
) {

    if (
        !guildId ||
        !ticketId
    ) {

        return false;

    }


    /*
    |--------------------------------------------------------------------------
    | Global AI
    |--------------------------------------------------------------------------
    */

    if (
        !isAIEnabled(
            guildId
        )
    ) {

        return false;

    }


    /*
    |--------------------------------------------------------------------------
    | Ticket AI
    |--------------------------------------------------------------------------
    */

    if (
        !isTicketAIEnabled(
            ticketId
        )
    ) {

        return false;

    }


    return true;

}


/*
|--------------------------------------------------------------------------
| AI MEMORY
|--------------------------------------------------------------------------
*/

export function saveAIMessage({

    ticketId,

    guildId = null,

    userId = null,

    username = null,

    role,

    content

}) {

    if (!ticketId) {

        throw new Error(
            "saveAIMessage: ticketId is required."
        );

    }


    if (!role) {

        throw new Error(
            "saveAIMessage: role is required."
        );

    }


    if (
        content === undefined ||
        content === null
    ) {

        return false;

    }


    const text =
        String(
            content
        ).trim();


    if (!text) {

        return false;

    }


    db.prepare(`
        INSERT INTO ai_messages (

            ticket_id,

            guild_id,

            user_id,

            username,

            role,

            content,

            created_at

        )

        VALUES (

            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?

        )

    `).run(

        ticketId,

        guildId,

        userId,

        username,

        role,

        text,

        Date.now()

    );


    return true;

}


/*
|--------------------------------------------------------------------------
| GET AI MESSAGES
|--------------------------------------------------------------------------
*/

export function getAIMessages(
    ticketId,
    limit = 20
) {

    if (!ticketId) {

        return [];

    }


    const safeLimit =
        Math.max(

            1,

            Math.min(

                Number(
                    limit
                ) || 20,

                100

            )

        );


    return db.prepare(`
        SELECT

            user_id,

            username,

            role,

            content,

            created_at

        FROM ai_messages

        WHERE ticket_id = ?

        ORDER BY id DESC

        LIMIT ?

    `).all(

        ticketId,

        safeLimit

    ).reverse();

}


/*
|--------------------------------------------------------------------------
| AI MESSAGE COUNT
|--------------------------------------------------------------------------
*/

export function getAIMessagesCount(
    ticketId
) {

    if (!ticketId) {

        return 0;

    }


    const result =
        db.prepare(`
            SELECT COUNT(*) AS count

            FROM ai_messages

            WHERE ticket_id = ?

        `).get(
            ticketId
        );


    return Number(
        result?.count ?? 0
    );

}


/*
|--------------------------------------------------------------------------
| CLEAR AI MEMORY
|--------------------------------------------------------------------------
*/

export function clearAIMemory(
    ticketId
) {

    if (!ticketId) {

        return 0;

    }


    const result =
        db.prepare(`
            DELETE FROM ai_messages

            WHERE ticket_id = ?

        `).run(
            ticketId
        );


    return result.changes;

}


/*
|--------------------------------------------------------------------------
| RESET TICKET AI
|--------------------------------------------------------------------------
*/

export function resetTicketAI(
    ticketId
) {

    if (!ticketId) {

        return null;

    }


    ensureTicketAIStatus(
        ticketId
    );


    db.prepare(`
        UPDATE ticket_ai_status

        SET

            enabled = 1,

            escalated = 0,

            updated_at = ?

        WHERE ticket_id = ?

    `).run(

        Date.now(),

        ticketId

    );


    return getTicketAIStatus(
        ticketId
    );

}


/*
|--------------------------------------------------------------------------
| DELETE TICKET DATA
|--------------------------------------------------------------------------
*/

export function deleteTicketAIData(
    ticketId
) {

    if (!ticketId) {

        return false;

    }


    const transaction =
        db.transaction(() => {

            db.prepare(`
                DELETE FROM ai_messages

                WHERE ticket_id = ?

            `).run(
                ticketId
            );


            db.prepare(`
                DELETE FROM ticket_ai_status

                WHERE ticket_id = ?

            `).run(
                ticketId
            );

        });


    transaction();


    return true;

}


/*
|--------------------------------------------------------------------------
| DELETE TICKET AI STATUS
|--------------------------------------------------------------------------
*/

export function deleteTicketAIStatus(
    ticketId
) {

    if (!ticketId) {

        return 0;

    }


    const result =
        db.prepare(`
            DELETE FROM ticket_ai_status

            WHERE ticket_id = ?

        `).run(
            ticketId
        );


    return result.changes;

}


/*
|--------------------------------------------------------------------------
| DISABLE ENTIRE TICKET SYSTEM
|--------------------------------------------------------------------------
|
| THIS COMPLETELY REMOVES THE SETUP.
|
| After executing:
|
| - guild_settings deleted
| - ticket panel data deleted
| - AI memory deleted
| - ticket AI statuses deleted
| - global AI configuration deleted
| - open log configuration deleted
| - close log configuration deleted
| - transcript configuration deleted
|
| Therefore the guild must run /setup again.
|
|--------------------------------------------------------------------------
*/

export function disableTicketSystem(
    guildId
) {

    if (!guildId) {

        return false;

    }


    const transaction =
        db.transaction(() => {

            /*
            |--------------------------------------------------------------------------
            | DELETE AI MEMORY
            |--------------------------------------------------------------------------
            */

            db.prepare(`
                DELETE FROM ai_messages

                WHERE guild_id = ?

            `).run(
                guildId
            );


            /*
            |--------------------------------------------------------------------------
            | DELETE TICKET AI STATUS
            |--------------------------------------------------------------------------
            */

            db.prepare(`
                DELETE FROM ticket_ai_status

                WHERE guild_id = ?

            `).run(
                guildId
            );


            db.prepare(`
                DELETE FROM tickets

                WHERE guild_id = ?

            `).run(
                guildId
            );


            /*
            |--------------------------------------------------------------------------
            | DELETE GUILD SETUP
            |--------------------------------------------------------------------------
            */

            db.prepare(`
                DELETE FROM guild_settings

                WHERE guild_id = ?

            `).run(
                guildId
            );

        });


    transaction();


    /*
    |--------------------------------------------------------------------------
    | VERIFY
    |--------------------------------------------------------------------------
    */

    const remaining =
        getGuildSettings(
            guildId
        );


    return remaining === null;

}


/*
|--------------------------------------------------------------------------
| TICKET LIFECYCLE
|--------------------------------------------------------------------------
*/

export function createTicketRecord({

    guildId,

    channelId,

    ownerId,

    type

}) {

    const now =
        Date.now();

    db.prepare(`
        INSERT INTO tickets (

            guild_id,
            channel_id,
            owner_id,
            type,
            status,
            priority,
            created_at,
            updated_at,
            last_user_message_at

        )

        VALUES (?, ?, ?, ?, 'open', 'normal', ?, ?, ?)

        ON CONFLICT(channel_id) DO UPDATE SET
            updated_at = excluded.updated_at

    `).run(
        guildId,
        channelId,
        ownerId,
        type,
        now,
        now,
        now
    );

    return getTicketRecord(channelId);

}


export function getTicketRecord(channelId) {

    if (!channelId) {
        return null;
    }

    return db.prepare(`
        SELECT *
        FROM tickets
        WHERE channel_id = ?
    `).get(channelId) ?? null;

}


export function updateTicketRecord(channelId, changes = {}) {

    const allowedColumns = new Set([
        "status",
        "priority",
        "claimed_by",
        "tags",
        "last_user_message_at",
        "last_staff_message_at",
        "closed_at"
    ]);

    const entries =
        Object.entries(changes)
            .filter(([column]) => allowedColumns.has(column));

    if (!channelId || entries.length === 0) {
        return getTicketRecord(channelId);
    }

    const assignments =
        entries.map(([column]) => `${column} = ?`).join(", ");

    db.prepare(`
        UPDATE tickets
        SET ${assignments}, updated_at = ?
        WHERE channel_id = ?
    `).run(
        ...entries.map(([, value]) => value),
        Date.now(),
        channelId
    );

    return getTicketRecord(channelId);

}


export function getTicketsForGuild(guildId, status = null) {

    if (!guildId) {
        return [];
    }

    if (status) {
        return db.prepare(`
            SELECT *
            FROM tickets
            WHERE guild_id = ? AND status = ?
            ORDER BY updated_at DESC
        `).all(guildId, status);
    }

    return db.prepare(`
        SELECT *
        FROM tickets
        WHERE guild_id = ?
        ORDER BY updated_at DESC
    `).all(guildId);

}


export function deleteTicketRecord(channelId) {

    if (!channelId) {
        return false;
    }

    const result =
        db.prepare(`
            DELETE FROM tickets
            WHERE channel_id = ?
        `).run(channelId);

    return result.changes > 0;

}


/*
|--------------------------------------------------------------------------
| DATABASE HEALTH
|--------------------------------------------------------------------------
*/

export function checkDatabase() {

    try {

        db.prepare(
            "SELECT 1"
        ).get();


        return true;

    } catch (error) {

        console.error(
            "❌ Database health check failed:",
            error
        );


        return false;

    }

}


/*
|--------------------------------------------------------------------------
| DATABASE PATH
|--------------------------------------------------------------------------
*/

export function getDatabasePath() {

    return dbPath;

}


/*
|--------------------------------------------------------------------------
| DATABASE STATS
|--------------------------------------------------------------------------
*/

export function getDatabaseStats() {

    try {

        const guilds =
            db.prepare(`
                SELECT COUNT(*) AS count

                FROM guild_settings

            `).get();


        const tickets =
            db.prepare(`
                SELECT COUNT(*) AS count

                FROM ticket_ai_status

            `).get();


        const messages =
            db.prepare(`
                SELECT COUNT(*) AS count

                FROM ai_messages

            `).get();


        return {

            guilds:
                Number(
                    guilds?.count ?? 0
                ),

            tickets:
                Number(
                    tickets?.count ?? 0
                ),

            aiMessages:
                Number(
                    messages?.count ?? 0
                )

        };

    } catch (error) {

        console.error(
            "❌ Failed to get database statistics:",
            error
        );


        return {

            guilds: 0,

            tickets: 0,

            aiMessages: 0

        };

    }

}


/*
|--------------------------------------------------------------------------
| CLOSE DATABASE
|--------------------------------------------------------------------------
*/

export function closeDatabase() {

    try {

        if (db.open) {

            db.close();

            console.log(
                "🗄️ Database connection closed."
            );

        }

    } catch (error) {

        console.error(
            "❌ Failed to close database:",
            error
        );

    }

}


/*
|--------------------------------------------------------------------------
| DEFAULT EXPORT
|--------------------------------------------------------------------------
*/

export default db;
/* ========================================================================
   PREMIUM LICENSING
   ======================================================================== */

db.exec(`
CREATE TABLE IF NOT EXISTS premium_subscriptions (
  guild_id TEXT PRIMARY KEY,
  plan TEXT NOT NULL DEFAULT 'starter',
  expires_at INTEGER,
  source TEXT NOT NULL DEFAULT 'manual',
  activated_by TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS premium_codes (
  code_hash TEXT PRIMARY KEY,
  code_preview TEXT NOT NULL,
  plan TEXT NOT NULL,
  days INTEGER,
  max_uses INTEGER NOT NULL DEFAULT 1,
  used_count INTEGER NOT NULL DEFAULT 0,
  revoked_at INTEGER,
  created_by TEXT,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS premium_code_redemptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code_hash TEXT NOT NULL,
  guild_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  redeemed_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS premium_audit_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guild_id TEXT,
  action TEXT NOT NULL,
  actor_id TEXT,
  details TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_premium_codes_created_at ON premium_codes(created_at);
CREATE INDEX IF NOT EXISTS idx_premium_audit_guild ON premium_audit_logs(guild_id, created_at);
`);

const _premiumGet = db.prepare('SELECT * FROM premium_subscriptions WHERE guild_id = ?');
const _premiumUpsert = db.prepare(`INSERT INTO premium_subscriptions (guild_id, plan, expires_at, source, activated_by, created_at, updated_at)
VALUES (@guildId,@plan,@expiresAt,@source,@actorId,@now,@now)
ON CONFLICT(guild_id) DO UPDATE SET plan=excluded.plan, expires_at=excluded.expires_at, source=excluded.source, activated_by=excluded.activated_by, updated_at=excluded.updated_at`);
const _premiumRevoke = db.prepare('DELETE FROM premium_subscriptions WHERE guild_id = ?');
const _codeInsert = db.prepare(`INSERT INTO premium_codes (code_hash, code_preview, plan, days, max_uses, created_by, created_at) VALUES (@codeHash,@codePreview,@plan,@days,@maxUses,@actorId,@now)`);
const _codeGet = db.prepare('SELECT * FROM premium_codes WHERE code_hash = ?');
const _codeRedeem = db.prepare('UPDATE premium_codes SET used_count = used_count + 1 WHERE code_hash = ? AND used_count < max_uses');
const _redemptionInsert = db.prepare('INSERT INTO premium_code_redemptions (code_hash,guild_id,user_id,redeemed_at) VALUES (?,?,?,?)');
const _codeList = db.prepare('SELECT * FROM premium_codes ORDER BY created_at DESC LIMIT ?');
const _codeRevoke = db.prepare('UPDATE premium_codes SET revoked_at = ? WHERE code_hash = ?');
const _auditInsert = db.prepare('INSERT INTO premium_audit_logs (guild_id,action,actor_id,details,created_at) VALUES (?,?,?,?,?)');
const _auditGuild = db.prepare('SELECT * FROM premium_audit_logs WHERE guild_id = ? ORDER BY created_at DESC LIMIT ?');

export function getPremiumSubscription(guildId) { return _premiumGet.get(guildId) || null; }
export function upsertPremiumSubscription({ guildId, plan, expiresAt, actorId, source='manual' }) { const now=Date.now(); _premiumUpsert.run({guildId,plan,expiresAt,source,actorId,now}); return _premiumGet.get(guildId); }
export function revokePremiumSubscription(guildId) { return _premiumRevoke.run(guildId); }
export function createPremiumCode(args) { _codeInsert.run({...args, now:Date.now()}); }
export function getPremiumCode(codeHash) { return _codeGet.get(codeHash) || null; }
export const redeemPremiumCode = db.transaction((codeHash,guildId,userId) => { const result=_codeRedeem.run(codeHash); if (!result.changes) throw new Error('This code is no longer available.'); _redemptionInsert.run(codeHash,guildId,userId,Date.now()); });
export function listPremiumCodes(limit=25) { return _codeList.all(Math.min(100,Math.max(1,limit))); }
export function deletePremiumCode(codeHash) { return _codeRevoke.run(Date.now(), codeHash); }
export function addPremiumAuditLog({guildId,action,actorId,details}) { _auditInsert.run(guildId,action,actorId,details,Date.now()); }
export function getPremiumAuditLogs(guildId,limit=15) { return _auditGuild.all(guildId,limit); }


/* ========================================================================
   PURCHASE ORDERS
   ======================================================================== */

db.exec(`
CREATE TABLE IF NOT EXISTS purchase_orders (
  id TEXT PRIMARY KEY,
  plan TEXT NOT NULL,
  days INTEGER,
  guild_id TEXT,
  user_id TEXT,
  email TEXT,
  amount REAL NOT NULL,
  currency TEXT NOT NULL DEFAULT 'eur',
  status TEXT NOT NULL DEFAULT 'pending',
  checkout_session_id TEXT,
  checkout_url TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_purchase_orders_status ON purchase_orders(status, created_at);
CREATE INDEX IF NOT EXISTS idx_purchase_orders_guild ON purchase_orders(guild_id, created_at);
`);

function purchaseId() {
  return `VX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

export function createPurchaseOrder({ plan, days, guildId=null, userId=null, email=null, amount, currency='eur' }) {
  const now = Date.now();
  const id = purchaseId();
  db.prepare(`INSERT INTO purchase_orders
    (id,plan,days,guild_id,user_id,email,amount,currency,status,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?)`)
    .run(id, plan, days, guildId, userId, email, amount, currency, 'pending', now, now);
  return db.prepare('SELECT * FROM purchase_orders WHERE id=?').get(id);
}

export function getPurchaseOrder(id) {
  return db.prepare('SELECT * FROM purchase_orders WHERE id=?').get(id) || null;
}

export function listPurchaseOrders(limit=100) {
  return db.prepare('SELECT * FROM purchase_orders ORDER BY created_at DESC LIMIT ?')
    .all(Math.min(250, Math.max(1, Number(limit))));
}

export function getPurchaseStats() {
  return db.prepare(`
    SELECT
      COUNT(*) AS total,
      SUM(CASE WHEN status='pending' THEN 1 ELSE 0 END) AS pending,
      SUM(CASE WHEN status IN ('paid','fulfilled') THEN 1 ELSE 0 END) AS paid,
      SUM(CASE WHEN status='fulfilled' THEN 1 ELSE 0 END) AS fulfilled,
      COALESCE(SUM(CASE WHEN status IN ('paid','fulfilled') THEN amount ELSE 0 END),0) AS revenue
    FROM purchase_orders
  `).get();
}

export function getPurchaseOrdersForUser(userId, limit=50) {
  if (!userId) return [];
  return db.prepare('SELECT * FROM purchase_orders WHERE user_id=? ORDER BY created_at DESC LIMIT ?')
    .all(userId, Math.min(100, Math.max(1, Number(limit))));
}

export function getInactiveTickets(cutoff, limit=100) {
  return db.prepare(`
    SELECT * FROM tickets
    WHERE status NOT IN ('closed','resolved')
      AND COALESCE(last_user_message_at, created_at) < ?
    ORDER BY updated_at ASC LIMIT ?
  `).all(cutoff, Math.min(250, Math.max(1, Number(limit))));
}

export function updatePurchaseOrder(id, changes={}) {
  const allowed = ['status','checkout_session_id','checkout_url','email'];
  const keys = Object.keys(changes).filter(k => allowed.includes(k));
  if (!keys.length) return getPurchaseOrder(id);
  const sets = keys.map(k => `${k}=@${k}`).join(', ');
  db.prepare(`UPDATE purchase_orders SET ${sets}, updated_at=@updated_at WHERE id=@id`)
    .run({ ...Object.fromEntries(keys.map(k => [k, changes[k]])), id, updated_at: Date.now() });
  return getPurchaseOrder(id);
}
