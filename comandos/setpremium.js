const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

if(message.author.id !== "697165280761217045"){
return message.quote(`**Só meu dono pode usar isso**!`)
}

let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
return message.quote(`**Quem você vai setar para ser premium?**`)
}

message.quote(`**Ok,o ${pessoa} agora é premium!**`)
db.set(`${pessoa.id}_premium`, true)
}