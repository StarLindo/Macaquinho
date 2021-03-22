const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {


if(!db.get(`${message.author.id}_casado`)){
return message.quote(`**Voce não é casado!**`)
}

let a = db.get(`${message.author.id}_casado`)

let pse = await client.users.fetch(db.get(`${a}_casado`))

const embed = new Discord.MessageEmbed()
.setDescription(`Ok,então você e <@${a}> se divorciaram...Triste!`)
message.quote(`${pse}`,embed)
db.set(`${message.author.id}_casado`, null)  
db.set(`${a}_casado`, null) 

}