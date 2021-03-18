const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
pessoa = message.author
}

let pet = db.get(`animal_${pessoa.id}`)
if(!pet){
return message.quote(`Essa pessoa não tem um pet!`)
}

let pp = db.fetch(`pp_${pessoa.id}`)
if(!pp){
pp = 0
}

let lv = db.fetch(`lovepoints_${pessoa.id}`)
if(!lv){
lv = 0
}

let pn = db.get(`nomepet_${pessoa.id}`)
if(!pn){
pn = 'Sem nome Do pet,mas sabia que você pode alterar o nome usando o comando `mk.setpetname`'
}


const pi = new Discord.MessageEmbed()
.setTitle(`Informações Do Pet`)
.setDescription(`**Qual o animal:** ${pet}
**Nome Do Animal:** ${pn}
**Pontos do Animal**: ${pp}
**Pontos de Amor do animal**: ${lv}`)

message.quote(pi)
}