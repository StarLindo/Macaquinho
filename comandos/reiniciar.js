const Discord = require('discord.js')
module.exports.run = async(client,message,args)=>{
  let dev = `697165280761217045`
  let staff = `697165280761217045`
  
  if (![`${dev}`, `${staff}`, `697165280761217045`].some(a => message.author.id === a)) return message.quote('Apenas meus donos podem usar isso')

  const rn = new Discord.MessageEmbed()
  .setTitle(`Reiniciação`)
  .setDescription(`Fui reiniciado,por ${message.author}`)
  .setColor('RED')

message.quote(rn)
client.destroy()
client.login(process.env.TOKEN)
}