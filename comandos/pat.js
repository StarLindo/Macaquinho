const Discord = require('discord.js')
const e = require('../emojis.json')

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
var gifs = [
'https://images-ext-2.discordapp.net/external/W9mbkGjC_ZSjea117LdmV4GUmRDxmRNsMpeVdnaFDZM/https/loritta.website/assets/img/actions/headpat/generic/gif_12.gif',
'https://images-ext-1.discordapp.net/external/kaeMB9DAgYCr6mc5KGs7TVVs6dTwdWu5FPLuHt7WQU8/https/loritta.website/assets/img/actions/headpat/generic/gif_10.gif?width=339&height=300',
'https://images-ext-2.discordapp.net/external/LQ_vTbP50cuxgG1Q0RggPjD_8eQEzrnOYnr92EWiiUw/https/purrbot.site/img/sfw/pat/gif/pat_036.gif',
'https://images-ext-2.discordapp.net/external/HHWfYqTpQq4Tp_WK189y4Xatji2d3YwBok-dZfGh9sY/https/purrbot.site/img/sfw/pat/gif/pat_009.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/igb_riUjJeFwto9B-viG5BPJMKzpYo5gfihPFXLm2bA/https/purrbot.site/img/sfw/pat/gif/pat_034.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/tw3UiKnL6KlDwLBRQ6Ho18fKimH0xXqPcGbs6N1mPKo/https/purrbot.site/img/sfw/pat/gif/pat_063.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/8hGLhe6ctrUwTMmrKf7FZownTHIQwa6C-EPtFJlH3Vg/https/purrbot.site/img/sfw/pat/gif/pat_021.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/ZQi-gOzqWabxZeqhz4-QWi8jP-rcVvsKYwapO4fWbwM/https/purrbot.site/img/sfw/pat/gif/pat_031.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/4-6cP8sJJ_-v8iL8VLNJ8hyIKXWPfVelyVEIBaCKogc/https/purrbot.site/img/sfw/pat/gif/pat_046.gif',
'https://images-ext-2.discordapp.net/external/d7xIQ4YwR8pAg0UTeq1X6NrlIXW7_motA2Mp4Q8lKGg/https/purrbot.site/img/sfw/pat/gif/pat_054.gif?width=246&height=300',
'https://images-ext-1.discordapp.net/external/oUyugyF5cf90TWT1AGP__EpdfbnhSYLuL0sjM9HIJlw/https/purrbot.site/img/sfw/pat/gif/pat_038.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/tWpCDrHGp3cuMu9XwhFlcxBQAZ684z0PLwBTbnRX310/https/purrbot.site/img/sfw/pat/gif/pat_057.gif?width=300&height=300'
];

var rand = gifs[Math.floor(Math.random() * gifs.length)];


if (!user) {
return message.quote('Você tem que mencionar alguem para acariciar!');
}

const beijo = new Discord.MessageEmbed()
.setTitle(`${e.petzin} Acariciamento`)
.setDescription(`${message.author} Acariciou ${user}`)
.setImage(rand)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

message.quote(beijo)

}