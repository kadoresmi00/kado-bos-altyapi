const config = require('../config.js');

module.exports = {
    name: 'message',
    execute(client, message) {
        if (message.author.bot || !message.guild || !message.content.startsWith(config.BOT.PREFİX)) return;
        const args = message.content.slice(config.BOT.PREFİX.length).trim().split(' ');
        const commandName = args.shift().toLowerCase();
        const command = client.commands.find((command) => command.usages.includes(commandName));
        if (!command) return;
        command.execute({ message, client, config, args });
    }
};