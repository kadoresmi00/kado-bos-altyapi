module.exports = {
  usages: ["eval"],
  async execute({ client, message, config, args }) {
    if (!config.BOT.OWNER.includes(message.author.id)) return;
    if (!args[0]) return;
    try {
      let code = eval(args.join(" "));
      if (typeof code !== "string")
        code = require("util").inspect(code, { depth: 0 });
      let çıkış = `\`\`\`js\n${code}\n\`\`\``;
      message.channel.send(çıkış);
    } catch (e) {
      message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
  },
};
