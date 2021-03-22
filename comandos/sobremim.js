const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  let bio = args.join(' ')

  if(!bio){
  return message.quote(`Escreva alguma coisa!`)
  }

message.quote(`Bio atualizada com Sucesso! `)
db.set(`sobremim_${message.author.id}`, bio)
}