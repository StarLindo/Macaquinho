const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  


if(!db.get(`${message.author.id}_carro`)){
return message.quote(`**Você precisa de um carro para viajar!**`)
}

let lagoa = 'Lagoa'
let cidade = 'Cidade'
let casa = 'Sua casa'
let vulcao = 'Vulcão'

  let embed = new Discord.MessageEmbed()
  .setDescription(`${message.author} Escolha para qual lugar você quer ir:
  🌊- Lagoa
  🌆- Cidade
  🏠- Sua casa
  🌋- Vulcão`)

  .setColor('#03fc7b')
  
  message.quote(embed).then(msg => {

   msg.react('🌋').then(() => msg.react('🌊').then(() => msg.react('🌆').then(() => msg.react('🏠'))))

    const filter = (reaction, user) => {
       return ['🌊', '🌆', '🏠', '🌋'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name == '🌊') {
          message.quote(`**Ok!${message.author} Agora você Está na lagoa!**`);
          db.set(`${message.author.id}_lugar`, lagoa)
        } 
      
        if (reaction.emoji.name === '🌆') {
          message.quote(`**Ok!${message.author} Agora você Está na Cidade!**`); 
          db.set(`${message.author.id}_lugar`, cidade)
        }

        if (reaction.emoji.name === '🏠') {
          message.quote(`**Ok!${message.author} Agora você Está na Sua casa!**`); 
          db.set(`${message.author.id}_lugar`, casa)
        }

       if (reaction.emoji.name == '🌋') {
          message.quote(`**Ok!${message.author} Agora você Está no vulcão!**`);
          db.set(`${message.author.id}_lugar`, vulcao)
        } 
      
      })
      .catch(collected => {
        message.quote(`**${message.author} Você demorou muito para escolher!**`);
      });
    })
  }
