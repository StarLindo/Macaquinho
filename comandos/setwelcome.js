const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.quote('Sem Permissão amigo!');

if(!args[0]) return message.quote('Você Precisa Falar O Canal Que Você Quer Para Ser O Canal De Welcome')
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
if(!channel) return message.quote('Você Precisa Falar O Canal Que Você Quer Para Ser O Canal De Welcome!')

let id = channel.id
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
.setDescription(`O Novo Canal De Welcome É ${channel}!`)
message.quote(embed)
db.set(`${message.guild.id}_welcomecnl`,id)



}