const Discord = require('discord.js')
const e = require('../emojis.json')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {

let user = message.author;

   


    let author =  db.fetch(`bilheteria_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#008000")
        .setDescription(`Você ja comprou um bilhete a pouco tempo,espere **${time.minutes}m ${time.seconds}s** para pegar outro bilhete`);
        
        message.quote(`${user}`, timeEmbed);
    } else {
  

  

let ba = Math.floor(Math.random() * 0) + 9828388282920;
let money = Math.floor(Math.random() * 1000) + 100;
const bilhete = new Discord.MessageEmbed()
.setTitle('Bilheteria!')
.setDescription(`${e.macacopalm} Parabens ${message.author}  Você pegou o Bilhete numero \`${ba}\` e Ganhou:

${e.sunmacaco} **R$${money}**

`)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

db.add(`money_${message.author.id}`, money)
db.set(`bilheteria_${user.id}`, Date.now());



message.channel.send(`${message.author}`, bilhete)

    };
}