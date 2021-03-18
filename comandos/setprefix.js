const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.quote('Sem Permissão amigo!');

if(!args[0]) return message.quote('Você Precisa Falar O Novo prefixo (O prefixo não pode ter espaços)')

let prefixo = db.get(`${message.guild.id}_prefix`)
if(!prefixo){
prefixo = config.prefix
}

const p = new Discord.MessageEmbed()
.setDescription(`O meu novo prefix agora é \`${args[0]}\``)
message.quote(p)
db.set(`prefix_${message.guild.id}`, args[0])


}