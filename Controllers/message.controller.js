const allowedChannelId = process.env.ALLOWED_CHANNELS.split(',');
const registeredCmds = ['ping', 'test', 'asd'];

exports.interaction = async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
};


// exports.messageCreate = async (message) => {
//   try {

//     if (message.author.bot || !allowedChannelId.includes(message.channel.id)) {
//       return;
//     }

//     if (message.content.length <= 0 ) {
//       message.send('Dont You SPAM on me!')
//     }

//     // Now, you can handle your commands here.
//     const messageFixed = message.content.toString().toLowerCase()
//     switch (messageFixed) {
//       case 'ping':
//         message.reply('Pong ..');
//         break;

//       case 'asd':
//         message.reply('fjk');
//         break;

//       case 'listzomboidmem':
//         try {
//           const guild = client.guilds.cache.get('1160833077707292742');
//           if (!guild) {
//             message.reply('Guild not found.');
//             return;
//           }
//           const zomboidRole = guild.roles.cache.find((role) => role.name === 'zomboid');

//           if (!zomboidRole) {
//             message.reply('The "zomboid" role does not exist in this server.');
//             return;
//           }

//           const membersWithZomboidRole = zomboidRole.members;
//           if (membersWithZomboidRole.size > 0) {
//             const memberTags = membersWithZomboidRole.map((member) => member.user.tag).join(', ');
//             message.reply(`Members with the "zomboid" role: ${memberTags}`);
//           } else {
//             message.reply('No members found with the "zomboid" role.');
//           }
//         } catch (error) {
//           console.error(error);
//         }
//         break;

//       default:
//         message.reply('I Dont Understand..');
//         break;
//     }


    

//   } catch (error) {
//     console.log(error);
//   }
// }