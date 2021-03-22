const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
pessoa = message.author
}

let levelzin2 = db.fetch(`levelzin_${pessoa.id}_${message.guild.id}`)
if(!levelzin2){
levelzin2 = 0
}
let xpzin2 = db.fetch(`xpzin_${pessoa.id}_${message.guild.id}`)
if(!xpzin2){
xpzin2 = 0
}
const embed = new Discord.MessageEmbed()
.setTitle(`Level!`)
.setDescription(`Level de ${pessoa}: **${levelzin2}**
Xp de ${pessoa}: **${xpzin2}**
Quanto de xp falta Para ${pessoa} upar de nivel: **${100 - xpzin2}**
`)
.setColor("#10b040")
message.quote(embed)
}