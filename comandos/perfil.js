const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

let member = client.users.cache.get(args[0]) || message.mentions.users.first() ||  message.author



let animal = db.get(`animal_${member.id}`)
if(!animal){
animal = 'Sem animal'
}


let cs = db.fetch(`usodecmd_${member.id}`)
if(!cs) cs = 0 

let sobremim = db.get(`sobremim_${member.id}`)
if(!sobremim){
sobremim = 'Nenhuma biografia definida.'
}

let money = db.fetch(`money_${member.id}`)
if(!money) money = 0






let avatar = member.avatarURL({ dynamic: true, format: "png", size: 1024 });



let b = ``
if(db.get(`${member.id}_casado`)){
b = `<@${db.get(`${member.id}_casado`)}>`
}
if(!db.get(`${member.id}_casado`)){
b = `Ninguem. :clown:`
}


const perfilsb = new Discord.MessageEmbed()
.setThumbnail(avatar)
.setTitle(`Perfil De: ${member.tag}`)
.setDescription(`Dinheiro De ${member}: **R$$${money.toLocaleString()}**

Animal de estimação:${animal}

Biografia: ${sobremim}

Casado com: ${b}

Quantas vezes ja usou meus comandos: ${cs} Vezes
`)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('RED');

message.quote(perfilsb)
}