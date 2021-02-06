const express = require('express');
const app = express();


const db = require('quick.db')
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Sou Tongolinha,Recebi o Ping às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);




const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");




const { APIMessage, Message } = require("discord.js");

Message.prototype.quote = async function (content, options) {
  const reference = {
    message_id: (
      !!content && !options
        ? typeof content === 'object' && content.messageID
        : options && options.messageID
    ) || this.id,
    message_channel: this.channel.id
  }

  const { data: parsed, files } = await APIMessage
    .create(this, content, options)
    .resolveData()
    .resolveFiles()

  console.log(parsed)

  let msg = await this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference: reference },
    files
  })

  await this.channel.messages.fetch(msg.id)
            .then(message => msg = message)
            .catch((err) => {
                console.log(err.stack)
            });

  return msg
}

client.on('message', message => {
  



     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./comandos/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});


client.on("message", async message => {
  if (message.content.startsWith('<@!748701847824629871>') || message.content.startsWith('<@748701847824629871>')) {
    let embed = new Discord.MessageEmbed()
      .setColor('#A020F0')
      .setDescription(`Ola,${message.author} Meu nome é Macaquinho,meu prefixo é **${config.prefix}** Utilize o comando **Help** Para obter ajuda!
      Outras Informações minhas:
      Meu dono é o StarZin#9537
      Sabia que eu sou OpenSource? [clique aqui]()`)
if (message.author.bot) return;
    message.quote(embed);
  }
});


client.login(process.env.TOKEN);
