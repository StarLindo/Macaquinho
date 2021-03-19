const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {


if(!db.get(`${member.id}_casado`)){
return message.quote(`**Voce não é casado!**`)
}

let pse = await client.users.fetch(db.get(`${member.id}_casado`))

const embed = new Discord.MessageEmbed()
.setDescription(`Ok,então você e ${pse} se divorciaram...Triste!`)
message.quote(`${pse}`,embed)
db.set(`${message.author.id}_casado`, null)  
db.set(`${pse.id}_casado`, null) 

}