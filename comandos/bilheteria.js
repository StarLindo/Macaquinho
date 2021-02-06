const Discord = require('discord.js')
const e = require('../emojis.json')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  var bdg = [
  `Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Nenhuma Badge`,
`Wow,Parabens  ${message.author} Você conseguiu a Rara Badge De Macaco: 🦧,Utilize o comando \`Perfil\` Para ver sua badge!`
  ]

  const bdga = Math.floor(Math.random() *  bdg.length); 

let ba = Math.floor(Math.random() * 0) + 9828388282920;
let money = Math.floor(Math.random() * 1000) + 100;
const bilhete = new Discord.MessageEmbed()
.setTitle('Bilheteria!')
.setDescription(`${e.macacopalm} Parabens ${message.author}  Você pegou o Bilhete numero \`${ba}\` e Ganhou:

${e.sunmacaco} **R$${money}**

${e.macacopalm} **${bdg[bdga]}** `)
.setFooter('Você pode dar mais ideias doque eu posso colocar nesse comando!')

db.add(`money_${message.author.id}`, money)

if(bdga === 'Wow,Parabens  ' + message.author + ' Você conseguiu a Rara Badge De Macaco: 🦧,Utilize o comando `Perfil` Para ver sua badge!')db.set(`badgemacaco_${message.author.id}`)

message.channel.send(`${message.author}`, bilhete)
}