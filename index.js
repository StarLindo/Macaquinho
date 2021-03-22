const express = require('express');
const e = require('./emojis.json')
const ms = require('parse-ms')
const bplHelper = require("bpl-helper");
const helper = new bplHelper("748701847824629871");
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




let prefix = db.get(`${message.guild.id}_prefix`)
if(prefix === null) {
prefix = config.prefix
}



     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;

     if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
    .trim().slice(prefix.length)
    .split(/ +/g);
  let command = args.shift().toLowerCase();


let embd = new Discord.MessageEmbed()
.setDescription(`<:errado:817512277821095957> | O Comando **${command}** Não foi encontrado.`)
.setFooter(`Utilize "${prefix}Help" por ajuda.`)
    if(command)db.add(`usodecmd_${message.author.id}`, 1)
    if (command === "e") command = "eval"
    if(command === "atm") command = "bal"
   try {
        const commandFile = require(`./comandos/${command}.js`)
        

        commandFile.run(client, message, args);
    } catch (err) {
    message.quote(embd);
  }

  



});


client.on('message', async message => {

let a = db.get(`levelconfig_${message.guild.id}`)
if(a !== "on")return

let amount = 1
if(db.get(`${message.author.id}_premium`)){
amount = 2
}

db.add(`xpzin_${message.author.id}_${message.guild.id}`, amount)
let levelzin1 = db.fetch(`levelzin_${message.author.id}_${message.guild.id}`)
let xpzin1 = db.fetch(`xpzin_${message.author.id}_${message.guild.id}`)

if(xpzin1 > 99){
db.subtract(`xpzin_${message.author.id}_${message.guild.id}`, 99)
db.add(`levelzin_${message.author.id}_${message.guild.id}`, 1)


let a = message.channel.send(`**Parabens, ${message.author} você subiu o seu nivel, agora você esta no nivel ${levelzin1 + 1}**`).then((a) => a.delete({ timeout: 3000 }))


}


})

client.on("ready", async message => {




console.log(`Online e com ${client.guilds.cache.size} Servidores!`)
})

 

client.on("message", async message => {

  
 

  let prefix = db.get(`${message.guild.id}_prefix`)
  if(!prefix){
  prefix = config.prefix
  }
  if (message.content.startsWith('<@!748701847824629871>') || message.content.startsWith('<@748701847824629871>')) {
    let embed = new Discord.MessageEmbed()
      .setColor('#A020F0')
      .setDescription(`Ola,${message.author} Meu nome é Macaquinho,meu prefixo nesse servidor é **${prefix}** Utilize o comando **Help** Para obter ajuda!
      Outras Informações minhas:

      Meu dono é o <@697165280761217045>

      Sabia que eu sou OpenSource? [Clique Aqui](https://github.com/StarLindo/Macaquinho)`)
if (message.author.bot) return;
    message.quote(embed);
  }
});






client.on('messageUpdate', async(oldMessage, newMessage) => {
  let channelID = db.get(`${oldMessage.guild.id}_channeldemsg`)
  if (!channelID) return
  let channel = oldMessage.guild.channels.cache.get(channelID)
  if (!channel) return

  const embed = new Discord.MessageEmbed()
.setColor("#9400d3")
.setAuthor(`Message Logs Do Macaquinho!` , client.user.displayAvatarURL()) 
.setDescription(`**Onde Foi**:${oldMessage.channel} 

**Autor Da Mensagem**: ${oldMessage.author}

**Mensagem Antiga**:  \`\`\`${oldMessage.content}\`\`\`
**Nova Mensagem**:  \`\`\` ${newMessage.content}\`\`\`  `)

if (oldMessage.author.bot) return;

  
  channel.send(embed);  
  
})




client.on('messageDelete', async (message) => {

  let channelID = db.get(`${message.guild.id}_channeldemsg`)
  if (!channelID) return
  let channel = message.guild.channels.cache.get(channelID)
  if (!channel) return

if (message.author.bot) return;
let messageapagada = new Discord.MessageEmbed()
.setColor(`#9400d3`) 
.setAuthor(`Message Logs Do Macaquinho!` , client.user.displayAvatarURL()) 
.setDescription(`**Autor Da Mensagem**: ${message.author}

**Onde Foi**: <#${message.channel.id}> 

**A Mensagem**: \`\`\` ${message.content}\`\`\`  `)


channel.send(messageapagada);
});

//${message.author} <#${message.channel.id}> ${message.content}


client.on('guildMemberAdd',  (member, guild) => {

let cnlid = db.get(`${member.guild.id}_welcomecnl`)
  if (!cnlid) return
  let channel = member.guild.channels.cache.get(cnlid)
  if (!channel) return


const embed = new Discord.MessageEmbed()
.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
.setDescription(`Ola,${member} Seja bem vindo(a) ao **${member.guild.name}**

Agora que você entrou temos ${member.guild.members.cache.size} Membros Nesse Incrivel servidor :D`)
.setColor('ffa500')

channel.send(`${member}`, embed)

})


client.on('guildMemberRemove',  (member, guild) => {

let cnlid = db.get(`${member.guild.id}_welcomecnl`)
  if (!cnlid) return
  let channel = member.guild.channels.cache.get(cnlid)
  if (!channel) return


const embed = new Discord.MessageEmbed()
.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
.setDescription(`O membro${member} Sai do nosso servidor (**${member.guild.name}**)

Agora que ele saiu temos apenas ${member.guild.members.cache.size} Membros Nesse Incrivel servidor :(`)
.setColor('ffa500')

channel.send(`${member}`, embed)

})


helper.on("ready", async (socket) => {
  console.log("Blue Phoenix Fera!");
});

helper.on("vote", async (data) => {
  let pessoa =  await client.channels.fetch("821147802469531730")

const embd = new Discord.MessageEmbed()
.setTitle("Votaram Em mim!")
.setDescription(` O usuario \`${data.user.username}\`  Votou em mim,agora eu tenho \`${data.bot.votos}\` Votos! :)
Voce Tambem pode votar em mim clicando [Aqui](https://bluephoenixlist.tk/bot/748701847824629871/vote) `)
.setColor("#993399")
  pessoa.send(`<@697165280761217045>`, embd);


});



client.login(process.env.TOKEN);


