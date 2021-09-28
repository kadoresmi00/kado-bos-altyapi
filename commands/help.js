module.exports = {
    usages: ['help'],
    async execute({ client, message, config }) {
        message.channel.send("Hello world!");
    }
};