const Canvas = require('canvas');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

if(!pessoa){
pessoa = message.author
}


    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/805048582859653140/809862478447378442/29qzk5.png?width=500&height=510');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);

    
    ctx.drawImage(avatar, 280, 170, 200, 200);

    const attach = new Discord.MessageAttachment(canva.toBuffer(), 'perfect.png');

    let pft = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription(`Realmente,o ${pessoa} é Perfeito..`)
    .setFooter(`Comando executado por ${message.author.tag}`)
  .attachFiles([attach])
  .setImage('attachment://perfect.png')


    message.quote(pft);

    
}