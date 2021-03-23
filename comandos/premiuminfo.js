const Discord = require('discord.js')
exports.run = (client, message, args) => {
  




const embed = new Discord.MessageEmbed()
.setTitle(`Vantagens Premium!`)
.setDescription(`Vantagens de ser Premium:
\`Mais dinheiro do Daily!\`

\`Mais dinheiro que você ganha nos comandos: pao,youtube e pescar!\` 

\`2x Xp no sistema de level!\`

**E mais coisas!**

 "Como eu posso ser premium?" O meu dono pode te deixar premium,ou se você ser level 30 (você ganha xp e level conversando) Você pode virar premium!`)

message.quote(embed)


}