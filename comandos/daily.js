const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
    
    let user = message.author;

    let timeout = 86400000;

if(db.get(`${user.id}_premium`)){
timeout = 43200000;
}

    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
    
    let amount = Math.floor(Math.random() * 10000) + 1000;
    if(db.get(`${user.id}_premium`)){
    amount = Math.floor(Math.random() * 50000) + 20000;
    }

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
  
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#008000")
        .setDescription(`Você já recebeu sua recompensa diária!\n\nColete novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s**`);
            
        message.quote( timeEmbed);

    } else {
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle(":dollar: Daily")
        .setColor("#008000")
        .setDescription(`Você coletou sua recompensa diária!\n\n :dollar: Dinheiro Coletado: **\`R$${amount}\`**`);
        
        message.quote(`${user}`, moneyEmbed);
        db.add(`money_${user.id}`, amount);
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
    }
}