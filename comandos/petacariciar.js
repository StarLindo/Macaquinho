const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {


let pet = db.get(`animal_${message.author.id}`)
if(!pet){
return message.quote(`Você não tem um pet,como você vai acaricia-lo?`)
}

  let user = message.author;


  let lovepoint = Math.floor(Math.random() * 10) + 5;

    let author =  db.fetch(`petacaricia_${user.id}`)

    let timeout = 30000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`espere  **${time.seconds}s** para acariciar seu pet denovo!`);
        
        message.quote(`${user}`, timeEmbed);
    } else {


const caça = new Discord.MessageEmbed()
.setTitle(`Acaricio de pet!`)
.setDescription(`Você Acariciou seu Pet e ele ganhou ${lovepoint} Pontos de Amor!`)

      message.quote(caça)



        db.add(`lovepoints_${user.id}`, lovepoint)
        db.set(`petacaricia_${user.id}`, Date.now());
    };





}






