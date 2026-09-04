import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('quiz')
  .setDescription('Launch the VaultX Quiz Battle Activity');

export async function execute(interaction) {
  const url = process.env.ACTIVITY_URL;
  if (!url) {
    return interaction.reply({
      embeds: [new EmbedBuilder()
        .setColor(0xef4444)
        .setTitle('VaultX 〢 Quiz Battle')
        .setDescription('The Quiz Battle Activity URL is not configured yet. Set `ACTIVITY_URL` in `.env` and redeploy the commands.')],
      ephemeral: true
    });
  }

  return interaction.reply({
    embeds: [new EmbedBuilder()
      .setColor(0x9b6cff)
      .setTitle('VaultX 〢 Quiz Battle')
      .setDescription('> **Multiplayer quiz battle is ready.**\n> Open the Activity and invite your friends to compete for the highest score.')
      .addFields({ name: 'Activity', value: `[Launch Quiz Battle](${url})`, inline: false })
      .setFooter({ text: 'VaultX • Quiz Battle' })],
    ephemeral: false
  });
}
