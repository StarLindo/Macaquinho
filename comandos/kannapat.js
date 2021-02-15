const Canvas = require('canvas');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
return message.quote(`Mencione alguem para ser esmagado(a) pelo mario!`)
}
    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/806179603416481823/810281945019056139/2Q.png');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const avatar2 = await Canvas.loadImage(message.author.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);
    ctx.drawImage(avatar, 180, 40, 70, 70);
     ctx.drawImage(avatar2, 60, 30, 70, 70);
    const marretada = new Discord.MessageAttachment(canva.toBuffer(), 'marretada.png');


let marret = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription(`O ${message.author} acariciou o(a) ${pessoa}`)
    .setFooter(`Comando executado por ${message.author.tag}`)
  .attachFiles([marretada])
  .setImage('attachment://marretada.png')

    message.quote(marret);

    
}