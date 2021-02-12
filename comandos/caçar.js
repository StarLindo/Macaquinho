const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {

  let user = message.author;

var bixos = [  
'Aranha',
'Zumbi',
'Esqueleto',
'Creeper'
];

var aleatorio = bixos[Math.floor(Math.random() * bixos.length)];
  

    let author =  db.fetch(`caça_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#008000")
        .setDescription(`Você ja caçou há pouco tempo,espere **${time.minutes}m ${time.seconds}s** para caçar de novo`);
        
        message.quote(`${user}`, timeEmbed);
    } else {


const caça = new Discord.MessageEmbed()
.setTitle(`Mineração`)
.setDescription(`Você caçou com sua espada de fogo ( <:fogoespada:809766855744028673> )
e achou um(a) ${aleatorio} !`)

      message.quote(caça)


      if(aleatorio === 'Aranha'){
  db.add(`money_${user.id}`, 1000)
}

if(aleatorio === 'Zumbi'){
  db.add(`money_${user.id}`, 1500)
}
  
if(aleatorio === 'Esqueleto'){
  db.add(`money_${user.id}`, 2000)
}

if(aleatorio === 'Creeper'){
  db.add(`money_${user.id}`, 2500)
}


        
        db.set(`caça_${user.id}`, Date.now());
    };





}






