const Discord = require("discord.js")
const db = require('quick.db')

 exports.run = async (client, message, args) => {

let local = db.get(`${message.author.id}_lugar`)
if(local !== 'Lagoa') return message.quote(`**Você tem que estar na Lagoa para pescar,use o comando \`mapa\` para ir para a lagoa**!`)

let peixes = Math.floor(Math.random() * 100) + 10;
let qtdp = Math.floor(Math.random() * 2) + 5;
if(db.get(`${message.author.id}_premium`)){
peixes = Math.floor(Math.random() * 600) + 200;
}

if(db.get(`${message.author.id}_paodinheiro`)){
  peixes = peixes + peixes
}


message.quote(`**Você pescou ${qtdp} Peixes,Vendeu para Thiagão Do Peixe e conseguiu R$${peixes},00!**`)
db.add(`money_${message.author.id}`, peixes)
}