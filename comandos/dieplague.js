const Canvas = require('canvas');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {


let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
return message.quote(`Mencione alguem para ser esmagado(a) pelo mario!`)
}
    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/806179603893977128/809961786827997185/morre_praga.png');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);
    ctx.drawImage(avatar, 90, 110, 200, 200);
    const marretada = new Discord.MessageAttachment(canva.toBuffer(), 'marretada.png');


let marret = new Discord.MessageEmbed()
  .setColor('#FF69B4')
    .setDescription(`Eita,o ${pessoa} tomou uma marretada na cabeçsss`)
    .setFooter(`Comando executado por ${message.author.tag}`)
  .attachFiles([marretada])
  .setImage('attachment://marretada.png')

    message.quote(marret);

    
}