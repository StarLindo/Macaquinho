const Discord = require('discord.js')
const e = require('../emojis.json')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {


  

  

let ba = Math.floor(Math.random() * 0) + 9828388282920;
let money = Math.floor(Math.random() * 1000) + 100;
const bilhete = new Discord.MessageEmbed()
.setTitle('Bilheteria!')
.setDescription(`${e.macacopalm} Parabens ${message.author}  Você pegou o Bilhete numero \`${ba}\` e Ganhou:

${e.sunmacaco} **R$${money}**

`)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

db.add(`money_${message.author.id}`, money)



message.channel.send(`${message.author}`, bilhete)
}