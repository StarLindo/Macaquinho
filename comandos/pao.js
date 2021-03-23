const Discord = require("discord.js")
const db = require('quick.db')

 exports.run = async (client, message, args) => {

let local = db.get(`${message.author.id}_lugar`)
if(local !== 'Cidade') return message.quote(`**Você tem que estar na cidade para assar um pão,use o comando \`mapa\` para ir para a cidade**!`)

let money2 = Math.floor(Math.random() * 100) + 10;
if(db.get(`${message.author.id}_premium`)){
  money2 = Math.floor(Math.random() * 600) + 200; 
}
if(db.get(`${message.author.id}_paodinheiro`)){
money2 = money2 + money2
}
  


message.quote(`**Você assou um pão,vendeu pro Thiagão do pão e ganhou R$${money2},00!**`)
db.add(`money_${message.author.id}`, money2)
}