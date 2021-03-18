const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  let pp = db.fetch(`pp_${message.author.id}`)
if(pp < 2000){
return message.quote(`Você precisa ter pelo menos **2000** Pontos de animal para evoluir seu animal`)
}

let pet = db.get(`animal_${message.author.id}`)
if(!pet){
return message.quote(`Você não tem um pet,como você vai evolui-lo?`)
}




let arcanine = '<:arcanine:811346823078871080> o raro arcanine!'

if(db.get(`animal_${message.author.id}`, arcanine)){
return message.quote('Você ja tem um arcanine,como você vai evoluir um arcanine,pra virar outro arcanine?')
};

db.set(`animal_${message.author.id}`, arcanine)
message.quote(`Wow,você evoluiu seu ${pet} Para um arcanine!`)



}