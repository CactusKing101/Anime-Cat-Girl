const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('UwU im running');
});

client.on('message', async msg => {
  if (!msg.content.startsWith(prefix) || msg.channel.type === 'dm' || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command == 'ping') {
    msg.channel.send('Pong');
    msg.channel.send('*blushes :pleading_face:');
  }
});

client.login(config.token);