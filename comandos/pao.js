const Discord = require("discord.js")
const db = require('quick.db')

 exports.run = async (client, message, args) => {

let local = db.get(`${message.author.id}_lugar`)
if(local !== 'Cidade') return message.quote(`**Você tem que estar na cidade para assar um pão,use o comando \`mapa\` para ir para a cidade**!`)

let adscence = Math.floor(Math.random() * 100) + 10;


if(db.get(`${message.author.id}_paodinheiro`)){
  adscence = adscence*2
}

if(db.get(`${message.author.id}_premium`)){
  adscence = adscence+adscence
}

if(db.get(`${message.author.id}_premium`) && db.get(`${message.author.id}_paodinheiro`)){
  adscence = adscence*4
}

  


message.quote(`**Você assou um pão,vendeu pro Thiagão do pão e ganhou R$${adscence},00!**`)
db.add(`money_${message.author.id}`,adscence)
}