import {
    handleAIMessage
} from "../controllers/aiController.js";


/*
|--------------------------------------------------------------------------
| MESSAGE CREATE
|--------------------------------------------------------------------------
|
| Central message handler for the AI ticket system.
|
| The controller is responsible for:
|
| - Detecting ticket channels
| - Checking AI status
| - Checking staff takeover
| - Calling the AI service
| - Handling escalation
| - Sending the AI response
|
|--------------------------------------------------------------------------
*/

export default async function messageCreate(
    message
) {

    /*
    |--------------------------------------------------------------------------
    | BASIC VALIDATION
    |--------------------------------------------------------------------------
    */

    if (!message) {
        return;
    }


    /*
    |--------------------------------------------------------------------------
    | IGNORE BOTS
    |--------------------------------------------------------------------------
    */

    if (
        message.author?.bot
    ) {

        return;

    }


    /*
    |--------------------------------------------------------------------------
    | IGNORE DMs
    |--------------------------------------------------------------------------
    */

    if (
        !message.guild
    ) {

        return;

    }


    /*
    |--------------------------------------------------------------------------
    | IGNORE EMPTY MESSAGES
    |--------------------------------------------------------------------------
    */

    if (
        !message.content?.trim()
    ) {

        return;

    }


    /*
    |--------------------------------------------------------------------------
    | DEBUG
    |--------------------------------------------------------------------------
    |
    | This lets us confirm that Discord is actually reaching
    | this handler.
    |
    */

    console.log(
        `📨 Message received | ${message.author.tag} | #${message.channel.name}`
    );


    /*
    |--------------------------------------------------------------------------
    | AI CONTROLLER
    |--------------------------------------------------------------------------
    */

    try {

        const result =
            await handleAIMessage({

                message

            });


        /*
        |--------------------------------------------------------------------------
        | DEBUG RESULT
        |--------------------------------------------------------------------------
        */

        if (result) {

            console.log(
                `🤖 AI controller processed message | ticket=${message.channel.id}`
            );

        }

    } catch (
        error
    ) {

        console.error(
            "❌ AI message handler error:",
            error
        );

    }

}