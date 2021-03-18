const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {


let pet = db.get(`animal_${message.author.id}`)
if(!pet){
return message.quote(`Você não tem um pet,como você vai treina-lo?`)
}

  let user = message.author;


  let petpoints = Math.floor(Math.random() * 50) + 10;

    let author =  db.fetch(`treinapet_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#008000")
        .setDescription(`Você ja treinou seu pet há algum tempo,deixe ele descansar e treine com ele daqui **${time.minutes}m ${time.seconds}s**`);
        
        message.quote(`${user}`, timeEmbed);
    } else {


const caça = new Discord.MessageEmbed()
.setTitle(`Treino de pet`)
.setDescription(`Você Treinou seu Pet e ele ganhou ${petpoints} Pontos de Animal!`)

      message.quote(caça)



        db.add(`pp_${user.id}`, petpoints)
        db.set(`treinapet_${user.id}`, Date.now());
    };


}






