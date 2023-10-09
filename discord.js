if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { Client, GatewayIntentBits } = require('discord.js');
const { setupDiscord } = require('./Controllers/cmd.prefix');
const { interaction, messageCreate } = require('./Controllers/message.controller');
const client = new Client({ intents: [    
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });

setupDiscord();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', interaction);

client.on('messageCreate', messageCreate );


client.login(process.env.BOT_TOKEN);


