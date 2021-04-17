const db = require('quick.db')
const Discord = require('discord.js')
const e = require("../emojis.json")
const config = require('../config.json')
module.exports.run = async(client,message,args)=>{
if(!message.member.hasPermission('ADMINISTRATOR')) return message.quote('Você não tem permissões para ver o painel de configurações desse servidor!')

let a = db.get(`${message.guild.id}_channeldemsg`)
let a1 = message.guild.channels.cache.get(a)
if(!a1) a1 = 'Sem Canal de messageLogs'

let a2 = db.get(`${message.guild.id}_welcomecnl`)
let a3 = message.guild.channels.cache.get(a2)
if(!a3) a3 = 'Sem Canal de Welcome'

let a4 = db.get(`${message.guild.id}_prefix`)
if(!a4){
a4 = config.prefix
}

let a5 = db.get(`${message.guild.id}_levelconfig`)
if(!a5){
a5 = "Off"
}

let batata = db.get(`${message.guild.id}_channeldelevelup`)
let hoi = message.guild.channels.cache.get(batata)
if(!hoi){
hoi = "Sem canal de level up"
}

const b = new Discord.MessageEmbed()

.setDescription(`Configurações Do Servidor "**${message.guild.name}**"

${e.engrenagem} Canal de MessageLogs: **${a1}** / Você pode mudar o canal Com o comando **setmessagelogs**

${e.engrenagem} Canal de Welcome: **${a3}** / Você pode mudar o canal Com o comando **setwelcome**

${e.engrenagem} Meu prefixo nesse servidor: **${a4}** /
Você pode setar o meu prefix nesse servidor com o comando **setprefix** 

${e.engrenagem} Sistema de Level: **${a5}** / Você pode setar On ou Off com o comando **setlevel**

${e.engrenagem} Canal de levelup: **${hoi}** /  Você pode mudar o canal Com o comando **setlevelup**

Caso você queira que não tenha mais Canais De logs:

Messagelogs: 🛠️
Welcome: ⚙️
Level Up: 🔧`)
message.channel.send(b).then(msg => {

   msg.react('🛠️').then(() => msg.react('⚙️').then(() => msg.react('🔧')))

    const filter = (reaction, user) => {
       return ['🛠️', '⚙️', '🔧'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name == '⚙️') {
          message.quote(`**Ok!${message.author} Agora o canal de welcome foi resetado!**`);
          db.set(`${message.guild.id}_welcomecnl`, null)
        } 
      
      if (reaction.emoji.name == '🛠️') {
          message.quote(`**Ok!${message.author} Agora o canal de message foi resetado!**`);
          db.set(`${message.guild.id}_channeldemsg`, null)
        }  

        if (reaction.emoji.name === '🔧') {
          message.quote(`**Ok!${message.author} Agora o canal de level up foi resetado!**`); 
          db.set(`${message.guild.id}_channeldelevelup`, null)
        }



      
      })
      .catch(collected => {
        message.quote(`**${message.author} Se você queria resetar os canais de Welcome/Messagelogs/Etc,o tempo acabou!**`);
      });
    })
}
