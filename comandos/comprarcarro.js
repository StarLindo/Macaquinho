const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let money = db.fetch(`money_${message.author.id}`)

if(db.get(`${message.author.id}_carro`)){
return message.quote(`**Você ja tem um carro!**`)
}

if(money < 30000){
return message.quote(`**Você Precisa ter R$30000 Para comprar um Carro!**`)
}

message.quote(`**Parabens,você Comprou um \`Chevrolet Onix Plus\` agora você pode viajar,utilize o comando \`mapa\` para ver os lugares que você pode viajar!**`)
db.subtract(`money_${message.author.id}`, 30000)
db.set(`${message.author.id}_carro`, true)
}