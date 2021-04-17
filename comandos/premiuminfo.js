const Discord = require('discord.js')
exports.run = (client, message, args) => {
  




const embed = new Discord.MessageEmbed()
.setTitle(`Vantagens Premium!`)
.setDescription(`Vantagens de ser Premium:

\`10% de desconto nas coisas do comando Padaria \`

\`Mais dinheiro do Daily!\`

\`2 Xp no sistema de level!\`

\`2x Mais de dinheiro Nos comandos De trabalho na categoria "Rp".\`
**E mais coisas!**

 "Como eu posso ser premium?" O meu dono pode te deixar premium,ou se você ser level 30 (você ganha xp e level conversando) Você pode virar premium!`)

message.quote(embed)


}