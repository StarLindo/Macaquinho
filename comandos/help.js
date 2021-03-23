const Discord = require('discord.js')
const e = require('../emojis.json')

exports.run = (client, message, args) => {
const help = new Discord.MessageEmbed()
.setTitle('Painel De Ajuda!')
.setDescription(`Ola ${message.author} Seja Bem Vindo(a) ao meu painel de ajuda,observe meus comandos e suas funções:

${e.funmacaco} Comandos De Diversão:
\`Bilheteria,Dado,Perfil,Kiss,Hug,Brindar,pat,Sobremim\`

${e.macaco1} Meus comandos utilitarios:
\`Botinfo,Help,Emoji,Ping,Randomavatar,Userinfo e Premiuminfo\` 

${e.macaco2} Comandos De Economia:
\`Bal,Dadobet,Caçar,Minerar E Daily\` 

${e.sunmacaco} Comandos De configuração:
\`Setmessagelogs,Painel,setwelcome,setprefix e setlevel\`

${e.macaco2} Comandos De level:
\`level\`

${e.funmacaco} Meus Comandos de RP (Role play)
\`Casar,Divorce,comprarcarro,mapa,pescar,pao,youtube,clan,padaria e comprar\`



${e.petzin} Comandos de animal:
\`adotarpet,petinfo,setpetname,treinarpet,evoluirpet e petacariciar\`

<:macaco_coffe:809953943744544779> Comandos de Photoshop(manipulação de imagem)
\`Perfect,Dieplague,Canvasfodase,Kannapat,Canvasdesfodase, procurado E bobfire\` `)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN')

.addField(`${e.setinha} Informações **Importantes** De alguns comandos.`,e.macaco1)
.addField(`${e.setinha} O comando **Randomavatar** Só pode ser usado em canais NSFW,porque pode vim algum avatar NSFW.`,e.macaco2)

message.quote(help)
}