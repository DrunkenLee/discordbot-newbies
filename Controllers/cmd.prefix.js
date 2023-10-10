if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const { REST, Routes } = require('discord.js');

exports.setupDiscord = async () => {
  const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    
  ];

  const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
};
