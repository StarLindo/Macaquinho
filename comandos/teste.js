const Canvas = require('canvas');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/775338790385352715/810597388380405770/220.png');
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    
  ctx.font = '22px Helvetica'
ctx.fillText('Eae', 50, 80)
    const cu = new Discord.MessageAttachment(canva.toBuffer(), 'eae.png');


let marret = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription(`eae?`)
  
  .attachFiles([cu])
  .setImage('attachment://eae.png')

    message.quote(marret);

    
}