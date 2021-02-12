const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {


   let user = message.author;

   let diamante = Math.floor(Math.random() * 20) + 1;

let pedra =    Math.floor(Math.random() * 120) + 60;


    let author =  db.fetch(`minerou_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#008000")
        .setDescription(`Você ja minerou o suficiente,espere **${time.minutes}m ${time.seconds}s** para minerar de novo`);
        
        message.quote(`${user}`, timeEmbed);
    } else {


const minera = new Discord.MessageEmbed()
.setTitle(`Mineração`)
.setDescription(`<:diamond:809747360674086923> Você Minerou ${diamante} Diamantes 
E
<:craftoedra:809748216198856734> ${pedra} Pedras!`)

      message.quote(minera)
db.add(`money_${user.id}`, pedra)

if(diamante > 5){
  db.add(`money_${user.id}`, 100)
}

if(diamante > 10){
  db.add(`money_${user.id}`, 500)
}
  
if(diamante > 15){
  db.add(`money_${user.id}`, 1000)
}

if(diamante > 19){
  db.add(`money_${user.id}`, 2000)
}

        
        db.set(`minerou_${user.id}`, Date.now());
    };

}

