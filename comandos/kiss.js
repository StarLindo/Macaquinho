const Discord = require('discord.js')
const e = require('../emojis.json')

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
var gifs = [
'https://images-ext-2.discordapp.net/external/Jou1gjEcIeRTasJpWe9fsGFI35usWd7sJGiAQ_yVw3I/https/cdn.nekos.life/kiss/kiss_117.gif',
'https://images-ext-2.discordapp.net/external/aKcneDeDIuyxBP-J-Whe3ucIZc0dt9cXYBVfTPFvoZQ/https/cdn.nekos.life/kiss/kiss_090.gif?width=400&height=208',
'https://images-ext-2.discordapp.net/external/CBrLvHssxDGYX2GnLRTV2lDRQfnrBFjMOSVBKDQJMjs/https/cdn.nekos.life/kiss/kiss_120.gif?width=400&height=216',
'https://images-ext-1.discordapp.net/external/41P26XTDBSnlnkBIMTTPWpkMAw3Wm3izNOQZ5Zd-E6k/https/cdn.nekos.life/kiss/kiss_125.gif?width=400&height=224',
'https://images-ext-2.discordapp.net/external/RP2QrsHo3dhfpGbx1NnOxI0hUq4qY1XN2whkYipTLqM/https/cdn.nekos.life/kiss/kiss_042.gif?width=400&height=204',
'https://images-ext-2.discordapp.net/external/Xpti1uXgr8qpw1W6GZ-NJRriZ7JDw16B_yp0p9pmWJ4/https/cdn.nekos.life/kiss/kiss_025.gif?width=400&height=166',
'https://images-ext-2.discordapp.net/external/bjyo-I2QPOO5_nGeclBpwwoCJmNuI-tjeq1W_W7nXvc/https/cdn.nekos.life/kiss/kiss_018.gif?width=400&height=190',
'https://images-ext-1.discordapp.net/external/0tYN9sloSnzRbrKhhlgGV6iIaWbl2VDa0ixsCNhuuY4/https/cdn.nekos.life/kiss/kiss_142.gif?width=400&height=224',
'https://images-ext-2.discordapp.net/external/sT0OlbR-AVT6nxJaUQ0z3kwbTTlhbsRqDKbSbEVdRj4/https/purrbot.site/img/sfw/kiss/gif/kiss_038.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/J5IqTAT1qVL8sY-KKFmi3LwgOsKXZS5vqq29UfH-6Hw/https/purrbot.site/img/sfw/kiss/gif/kiss_085.gif?width=400&height=212',
'https://images-ext-2.discordapp.net/external/tDBu3FOHvSPsQXbmoWQt8CgkjLzkp3xaTzCR-jGHyHM/https/purrbot.site/img/sfw/kiss/gif/kiss_107.gif?width=400&height=226',
'https://images-ext-2.discordapp.net/external/p_qKm8daJAYDUcmnSONdCPxz9BhM_7_H_tK3FA99szk/https/purrbot.site/img/sfw/kiss/gif/kiss_067.gif?width=400&height=226',
'https://images-ext-1.discordapp.net/external/StLXK3Ap0QjR_hwRijrFsPE44PYrl4yamLcHHHrY2cg/https/purrbot.site/img/sfw/kiss/gif/kiss_034.gif?width=400&height=230',
'https://images-ext-2.discordapp.net/external/Tn3rmOl03nOTUzuLsawsAbKaZ7tEwcwEdmLx2nfMOlA/https/purrbot.site/img/sfw/kiss/gif/kiss_022.gif?width=400&height=200'
];

var rand = gifs[Math.floor(Math.random() * gifs.length)];


if (!user) {
return message.quote('Você tem que mencionar alguem para beijar!');
}

const beijo = new Discord.MessageEmbed()
.setTitle(`${e.love} O amor é lindo!`)
.setDescription(`${message.author} Beijou ${user}`)
.setImage(rand)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

message.quote(beijo)

}