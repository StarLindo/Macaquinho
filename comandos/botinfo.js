const Discord = require('discord.js')
const e = require('../emojis.json')

module.exports.run = async (client, message, args) => {

const botinfo = new Discord.MessageEmbed()
.setTitle('Minhas Informações!')
.setDescription(`${e.macaco1} Ola ${message.author} Meu nome é macaquinho,Ainda estou em desenvolvimento!

Você Pode me Adicionar clicando [aqui!](https://discord.com/oauth2/authorize?=&client_id=748701847824629871&scope=bot&permissions=8)${e.macaco2}

Meu Criador Se Chama:<@697165280761217045> ${e.rmacaco}

**Programação**", Programado em [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) com <:nodejs:807059588552720416> [Node.js](https://nodejs.org/en/)\n> Livraria:[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) \n Hospedagem: [Repl.it](https://repl.it)

Você pode usar o comando **Help** Para obter ajuda.

Sabia que eu sou Open Source?
[clique aqui](https://github.com/StarLindo/Macaquinho)


Mais sobre minha vida de Macaco:

Cientistas me capturaram para fazer experimentos em mim e eu quero me vingar de todos os humanos,mas você é um humano Legal ${e.love} 
`)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('RED');


await message.quote(botinfo)
}