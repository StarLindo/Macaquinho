const Canvas = require('canvas');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
pessoa = message.author
}
    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/807718919078281247/811935106586640395/bobfire.png');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);
    
    ctx.drawImage(avatar, 30, 40, 100, 130);
    const marretada = new Discord.MessageAttachment(canva.toBuffer(), 'bobfire.png');
  


let marret = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription(`Queimado`)
    .setFooter(`Comando executado por ${message.author.tag}`)
  .attachFiles([marretada])
  .setImage('attachment://bobfire.png')

    message.quote(marret);

    
}