
exports.interaction = async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
};


exports.messageCreate = async (message) => {
  try {
    if (message.author.bot) {
      return;
    }

    console.log(`${message.author.globalName}: ${message.content}`);
  } catch (error) {
    console.log(error);
  }
}