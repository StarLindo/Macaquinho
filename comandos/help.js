const Discord = require('discord.js')
const e = require('../emojis.json')

exports.run = (client, message, args) => {
const help = new Discord.MessageEmbed()
.setTitle('Painel De Ajuda!')
.setDescription(`Ola ${message.author} Seja Bem Vindo(a) ao meu painel de ajuda,observe meus comandos e suas funções:

${e.funmacaco} Comandos De Diversão:
\`Bilheteria,Dado,Perfil,Kiss,Hug,Brindar E pat\`

${e.macaco1} Meus comandos utilitarios:
\`Botinfo,Help,Emoji,Ping,Randomavatar e Userinfo\` 

${e.macaco2} Comandos De Economia
\`Bal,Dadobet,Caçar e Minerar\` 

${e.sunmacaco} Comandos De configuração:
\`Setmessagelogs,Painel E setwelcome\` `)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN')

.addField(`${e.setinha} Informações **Importantes** De alguns comandos.`,e.macaco1)
.addField(`${e.setinha} O comando **Randomavatar** Só pode ser usado em canais NSFW,porque pode vim algum avatar NSFW.`,e.macaco2)

message.quote(help)
}