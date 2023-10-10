if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { Client, GatewayIntentBits } = require('discord.js');
const { setupDiscord } = require('./Controllers/cmd.prefix');
const { interaction, messageCreate } = require('./Controllers/message.controller');
const allowedChannelId = process.env.ALLOWED_CHANNELS.split(',');
const registeredCmds = ['ping', 'test', 'asd'];
const client = new Client({ intents: [    
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });

setupDiscord();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // console.log(JSON.stringify(client));
});

client.on('interactionCreate', interaction);

client.on('messageCreate' , async (message) => {
  try {

    if (message.author.bot || !allowedChannelId.includes(message.channel.id)) {
      return;
    }

    if (message.content.length <= 0 ) {
      message.send('Dont You SPAM on me!')
    }

    // Now, you can handle your commands here.
    const messageFixed = message.content.toString().toLowerCase()
    switch (messageFixed) {
      case 'ping':
        message.reply('Pong ..');
        break;

      case 'asd':
        message.reply('fjk');
        break;

      case 'listzomboidmem':
        try {
          const guild = client.guilds.cache.get(process.env.NEWBIES_SERVER_ID);
          if (!guild) {
            message.reply('Guild not found.');
            return;
          }
          const zomboidRole = guild.roles.cache.find((role) => role.name === 'zomboid');

          if (!zomboidRole) {
            message.reply('The "zomboid" role does not exist in this server.');
            return;
          }

          const membersWithZomboidRole = zomboidRole.members;
          if (membersWithZomboidRole.size > 0) {
            const memberTags = membersWithZomboidRole.map((member) => member.user.tag).join(', ');
            message.reply(`Members with the "zomboid" role: ${memberTags}`);
          } else {
            message.reply('No members found with the "zomboid" role.');
          }
        } catch (error) {
          console.error(error);
        }
        break;

      default:
        message.reply('I Dont Understand..');
        break;
    }


    

  } catch (error) {
    console.log(error);
  }
} );


client.login(process.env.BOT_TOKEN);



