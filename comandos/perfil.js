const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

let member = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author


let badge = db.get(`badge_${member.id}`)
if(!badge) badge = 'Sem Badge'


let cs = db.fetch(`usodecmd_${member.id}`)
if(!cs) cs = 0 

let money = db.fetch(`money_${member.id}`)
if(!money) money = 0



let avatar = member.avatarURL({ dynamic: true, format: "png", size: 1024 });

const perfilsb = new Discord.MessageEmbed()
.setThumbnail(avatar)
.setTitle(`Perfil De: ${member.tag}`)
.setDescription(`Dinheiro De ${member}: **R$${money}**

Badges:\n${badge} 

Quantas vezes ja usou meus comandos: ${cs} Vezes
`)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

message.quote(perfilsb)
}