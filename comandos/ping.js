const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  

    let user = message.author;
    let avatar = message.author.displayAvatarURL({dynamic: true, format: 'png' });
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`** Ping!**`)
    .setDescription(`${user}`)
    .setAuthor(message.author.tag, avatar)
    
    const m = await message.quote(embed);

    m.edit(
    embed.setDescription(`Latência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`)
    
  )
}