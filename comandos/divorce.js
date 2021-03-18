const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

let a = db.get(`${message.author.id}_casado`)  
if(!a){
return message.quote(`**Voce não é casado!**`)
}

let b = await client.users.fetch(a)

const embed = new Discord.MessageEmbed()
.setDescription(`Ok,então você e ${b} se divorciaram...Triste!`)
message.quote(embed)
b.send(`Bom,O usuario ${message.author} se divorciou com você...Triste!`)
db.set(`${message.author.id}_casado`, null)  
db.set(`${b}_casado`, null) 
}