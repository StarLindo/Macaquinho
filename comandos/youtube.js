const Discord = require("discord.js")
const db = require('quick.db')

 exports.run = async (client, message, args) => {

let local = db.get(`${message.author.id}_lugar`)
if(local !== 'Sua casa') return message.quote(`**Você tem que estar na Sua casa para gravar um video no yotube,use o comando \`mapa\` para ir para a Sua casa**!`)

let adscence = Math.floor(Math.random() * 100) + 10;
if(db.get(`${message.author.id}_premium`)){
adscence = Math.floor(Math.random() * 600) + 200;
}
if(db.get(`${message.author.id}_paodinheiro`)){
  adscence = adscence + adscence
}


message.quote(`**Você gravou um video e ganhou R$${adscence},00**`)
db.add(`money_${message.author.id}`, adscence)
}