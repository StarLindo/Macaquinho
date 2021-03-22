const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.quote('**Parece que você não tem permissões...**')


  if(!['on', 'off', 'On', 'Off'].includes(args[0])){
    return message.quote(`**Coloque \`On\` Ou \`Off\` Depois de usar o comando.**`)
  }

let off = "off"
let on = "on"

if(args[0] === 'off' || args[0] === 'Off'){
 message.quote(`**Ok,agora o sistema de level está desativado!**`)
db.set(`levelconfig_${message.guild.id}`, off)
}

if(args[0] === 'on' || args[0] === 'On'){
 message.quote(`**Ok,agora o sistema de level está ativado!**`)
db.set(`levelconfig_${message.guild.id}`, on)
}


  }