const Discord = require('discord.js')
const e = require('../emojis.json')

exports.run = (client, message, args) => {
const help = new Discord.MessageEmbed()
.setTitle('Painel De Ajuda!')
.setDescription(`Ola ${message.author} Seja Bem Vindo(a) ao meu painel de ajuda,observe meus comandos e suas funções:

${e.funmacaco} Comandos De Diversão:
\`Bilheteria,Dado E Perfil\`

${e.macaco1} Meus comandos utilitarios:
\`Botinfo,Help,Emoji E Ping\` 

${e.macaco2} Comandos De Economia
\`Bal E Dadobet\` `)


message.quote(help)
}