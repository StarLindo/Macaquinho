const Discord = require('discord.js')
const e = require('../emojis.json')

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
var gifs = [
'https://images-ext-2.discordapp.net/external/QzYgdHq4-BrZoMcpH1o9HQpHqhIqDswkBmhrgEqfruo/https/i.imgur.com/Pnh7Ri6.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/HdesGtnGz32Mylb6wB7AFCq-59mfpZfiKM7R0B_s6Gc/https/i.imgur.com/qXkEHZK.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/rg0HUapY4tXAFfyg3j8LoeuCaa7Vf8HUv86mgTXb2MA/https/i.imgur.com/Lwis0bF.gif',
'https://images-ext-2.discordapp.net/external/qXMl5u9UHaAnZs_xYduvSrW6MjnJqNNNkeFcsRQ4RoU/https/i.imgur.com/COJeuRc.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/9uMRHGnb_rjRmLN1MmBHgx8sBIXV74xqVKZzW0EA3Ww/https/i.imgur.com/ZaFoBkn.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/dES8IQP4xSEu_xG63-rnEHXMPEQiEGirjghUkGnhpoI/https/i.imgur.com/Hsh4W3y.gif?width=400&height=222'
];

var rand = gifs[Math.floor(Math.random() * gifs.length)];


if (!user) {
return message.quote('Você tem que mencionar alguem para brindar!');
}

const beijo = new Discord.MessageEmbed()
.setTitle(`${e.rmacaco} Um Brinde!`)
.setDescription(`${message.author} Brindou com ${user}`)
.setImage(rand)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

message.quote(beijo)

}