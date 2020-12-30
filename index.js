const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('UwU im running');
});

client.on('message', async msg => {

  if (msg.content.toLocaleLowerCase() == 'ping') {
    msg.channel.send('Pong');
    msg.channel.send('*blushes :pleading_face:');
  }
});

client.login(config.token);