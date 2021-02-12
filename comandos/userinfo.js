const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || 
        message.member;




const embed = new Discord.MessageEmbed()
.setTitle(`<:info:807982420442742825>  Informações Do Usuario:`)
.addField(`🆔  ID da pessoa:`, member.id)
.addField(`📅  Quando criou a Conta:`, member.user.createdAt.toLocaleDateString("pt-BR"))
.addField(`📅  Quando Entrou no servidor:`, member.joinedAt.toLocaleDateString("pt-BR"))
.addField(`#️⃣  Tag da pessoa:`, member.user.discriminator)
.addField(`🌐  Nome Da Pessoa:`, member.user.username)

message.quote(embed)


}