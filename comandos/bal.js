const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {

let member = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author

let money = db.fetch(`money_${member.id}`)

if(money === null) money = 0;

let guildmoney = db.fetch(`money_${message.guild.id}`)

const bal = new Discord.MessageEmbed()
.setTitle('Informações Do Dinheiro')
.setColor('BROWN')
.setDescription(`Dinheiro De ${member}:

Dinheiro Do Usuario: **R$${money.toLocaleString()}**

`)
.setFooter('© Todos os Direitos Macaquinho Bot')

message.quote(bal)


}
