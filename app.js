const { Client, Collection, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const fs = require('fs');

const config = require('./config.js');
const client = new Client();
client.commands = new Collection();

mongoose.connect(config.BOT.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(c => console.log(`MongoDB Connected`)).catch(err => console.error("MongoDB Not Connected"));

const commands = fs.readdirSync('./commands', { encoding: 'utf-8' });
for (let commandFile of commands) {
    let command = require(`./commands/${commandFile}`);
    client.commands.set(command.usages[0], command);
}

const events = fs.readdirSync('./events', { encoding: 'utf-8' });
for (let eventFile of events) {
    let event = require(`./events/${eventFile}`);
    client.on(event.name, (...args) => event.execute(client, ...args));
}


client.login(config.BOT.TOKEN).then(c => console.log(`${client.user.tag} Signed in!`)).catch(err => console.error("Token Failed!"));