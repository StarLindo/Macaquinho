const db = require('quick.db')
const Discord = require('discord.js')
const e = require("../emojis.json")
module.exports.run = async(client,message,args)=>{
if(!message.member.hasPermission('ADMINISTRATOR')) return message.quote('Você não tem permissões para ver o painel de configurações desse servidor!')

let a = db.get(`${message.guild.id}_channeldemsg`)
let a1 = message.guild.channels.cache.get(a)
if(!a1) a1 = 'Sem Canal de messageLogs'

const b = new Discord.MessageEmbed()

.setDescription(`Configurações Do Servidor "**${message.guild.name}**"

${e.engrenagem} Canal de MessageLogs: **${a1}** / Você pode mudar o canal Com o comando **setmessagelogs**`)
message.channel.send(b)
}
