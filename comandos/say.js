const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

if(!args.join('')){ 
return message.quote(`O Que você quer que eu fale?`)
}

const embed = new Discord.MessageEmbed()
.setDescription(`
O usuario ${message.author} Me pediu para falar:
  
  **${args.join('')}**`)
.setColor("#663366")
.setFooter(`Comando usado por ${message.author.tag}`)
  message.channel.send(embed);
};