const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

let member = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author

let badge = db.get(`badgemacaco_${member.id}`);

if(badge === null) badge = 'Nenhuma Badge';

if(badge)badge = '🦧'

let money = db.fetch(`money_${member.id}`)

let avatar = member.avatarURL({ dynamic: true, format: "png", size: 1024 });

const perfilsb = new Discord.MessageEmbed()
.setThumbnail(avatar)
.setTitle(`Perfil De: ${member.tag}`)
.setDescription(`Dinheiro De ${member}: **R$${money}**

Badges Do Usuario: ${badge}`)

message.quote(perfilsb)
}