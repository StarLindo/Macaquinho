const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
 let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!member){
return message.quote(`**Mencione com quem você quer casar!**`)
}

if(db.get(`${message.author.id}_casado`)) return message.quote(`**Você Ja é casado(a)!**`)


if(db.get(`${member.id}_casado`)){
return message.quote(`**O ${member} Ja é casado..**`)
}




let ap = new Discord.MessageEmbed()
.setDescription(`Agora o ${member} e o ${message.author} Estão casados!`)
.setFooter(`Felicidades ao casal!`)
.setColor("GREEN")

let rp = new Discord.MessageEmbed()
.setDescription(`O ${member} Não aceitou o pedido de casamento de ${message.author}!`)
.setFooter(`Você vai encontrar alguem melhor!`)
.setColor("RED")


  let embed = new Discord.MessageEmbed()
  .setDescription(`${member},Você aceita casar com ${message.author}?
  Clique em ✅ para Aceitar e em ❌ Para recusar!`)

  .setColor('#03fc7b')
  
  message.quote(`${member}`, embed).then(msg => {

   msg.react('✅').then(() => msg.react('❌'))

    const filter = (reaction, user) => {
       return ['✅', '❌'].includes(reaction.emoji.name) && user.id === member.id;
    };
    
    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name == '✅') {
          message.quote(ap);
          db.set(`${message.author.id}_casado`, member.id)
          db.set(`${member.id}_casado`, message.author.id)
        } 
      
        if (reaction.emoji.name === '❌') {
          message.quote(rp);
          
        }
       
      
      })
      .catch(collected => {
        message.quote(`Bom,como o ${member} Não aceitou nem recusou,então o tempo acabou :]`);
      });
    })
  }
