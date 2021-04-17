const Discord = require("discord.js")
const db = require('quick.db')

 exports.run = async (client, message, args) => {

let local = db.get(`${message.author.id}_lugar`)
if(local !== 'Lagoa') return message.quote(`**Você tem que estar na Lagoa para pescar,use o comando \`mapa\` para ir para a lagoa**!`)


let qtdp = Math.floor(Math.random() * 2) + 5;
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



message.quote(`**Você pescou ${qtdp} Peixes,Vendeu para Thiagão Do Peixe e conseguiu R$${adscence},00!**`)
db.add(`money_${message.author.id}`, adscence)
}