const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  


if(db.get(`${message.author.id}_clan`)){
return message.quote(`Você ja está em um clan!`)
}

let macaco = 'Macaco'
let lagartixa = 'Lagartixa'


  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.author} Escolha para qual Clan você quer ir:
  🐒 - Macaco
  🦎 - Lagartixa`)

  .setColor('#03fc7b')
  
  message.quote(embed).then(msg => {

 msg.react('🐒').then(() => msg.react('🦎'))

    const filter = (reaction, user) => {
       return ['🐒', '🦎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name == '🐒') {
          message.quote(`**Ok! ${message.author} Agora você É do clan Macaco!**`);
          db.set(`${message.author.id}_clan`, macaco)
        } 
      
        if (reaction.emoji.name === '🌆') {
          message.quote(`**Ok! ${message.author} Agora você É do clan Lagartixa!**`); 
          db.set(`${message.author.id}_clan`, lagartixa)
        }

      
   
      
      })
      .catch(collected => {
        message.quote(`**${message.author} Você demorou muito para escolher!**`);
      });
    })
  }
