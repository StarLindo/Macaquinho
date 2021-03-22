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
let a3 = message.guild.channels.cache.get(a)
if(!a3) a3 = 'Sem Canal de Welcome'

let a4 = db.get(`prefix_${message.guild.id}`)
if(!a4){
a4 = config.prefix
}

let a5 = db.get(`levelconfig_${message.guild.id}`)
if(!a5){
a5 = "Off"
}
const b = new Discord.MessageEmbed()

.setDescription(`Configurações Do Servidor "**${message.guild.name}**"

${e.engrenagem} Canal de MessageLogs: **${a1}** / Você pode mudar o canal Com o comando **setmessagelogs**

${e.engrenagem} Canal de Welcome: **${a3}** / Você pode mudar o canal Com o comando **setwelcome**

${e.engrenagem} Meu prefixo nesse servidor: **${a4}** /
Você pode setar o meu prefix nesse servidor com o comando **setprefix** 

${e.engrenagem} Sistema de Level: **${a5}** / Você pode setar On ou Off com o comando **setlevel**`)
message.channel.send(b)
}
