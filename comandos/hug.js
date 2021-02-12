const Discord = require('discord.js')
const e = require('../emojis.json')

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
var gifs = [
'https://images-ext-2.discordapp.net/external/0L4mWTsHkpyz_HGCstfFiyweMn6W4pYo9k72lhtHZAA/https/loritta.website/assets/img/actions/hug/male_x_male/gif_129.gif?width=400&height=199',
'https://images-ext-2.discordapp.net/external/-mgTY59G8EaRzJhm7XojkjdubjKPuyVzOi3oWIql_Gg/https/loritta.website/assets/img/actions/hug/generic/gif_175.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/yXFjSot2Slnlp7s7xHSh5Zm9arON-LpaHPnjAt491YY/https/loritta.website/assets/img/actions/hug/male_x_male/gif_130.gif',
'https://images-ext-2.discordapp.net/external/Kjy-6T7xYW30f5Hnv3yeQtiTAWLqeerF39hmZT_J47U/https/loritta.website/assets/img/actions/hug/generic/gif_176.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/UIu3d9TirYzPVhK-pSEdeGYB4gYKS10klARf5vSV12I/https/loritta.website/assets/img/actions/hug/male_x_male/gif_128.gif?width=400&height=225',
'https://images-ext-2.discordapp.net/external/W74oVPsfJlLjKxg-ixG-ohNXNynJemAs1B4uknvFlQM/https/purrbot.site/img/sfw/hug/gif/hug_002.gif',
'https://images-ext-2.discordapp.net/external/5CfPRoH2vs8a3wciXXN0O1_eZb4YbPfwwH459dNFYQg/https/cdn.zerotwo.dev/HUG/852ef7ed-01f6-43b6-b6d4-474e26d5be34.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/lpvK-jpoh6prHAj7N3wz2El2oBIeHsAuMS2gnuHgxV0/https/purrbot.site/img/sfw/hug/gif/hug_050.gif?width=400&height=225',
'https://images-ext-1.discordapp.net/external/0MrsISF-x8pLI22KkpXRXo2UfLvIlg_JV-dU7cIv7jY/https/purrbot.site/img/sfw/hug/gif/hug_034.gif',
'https://images-ext-1.discordapp.net/external/VySNe6SDWZwlpR2RKu40pIb-MFvh_v7kfeMkrwER5tE/https/purrbot.site/img/sfw/hug/gif/hug_042.gif',
'https://images-ext-2.discordapp.net/external/1RgKtSs3knLK1ZDNtJfIkz-2bz7MYKKvzhZotLxdjoY/https/purrbot.site/img/sfw/hug/gif/hug_089.gif?width=422&height=427',
'https://images-ext-1.discordapp.net/external/EmJytrd55BRcFCdGLfmO14rLX9LVVX4XOB3BIJ2UZB0/https/purrbot.site/img/sfw/hug/gif/hug_010.gif?width=400&height=205'
];

var rand = gifs[Math.floor(Math.random() * gifs.length)];


if (!user) {
return message.quote('Você tem que mencionar alguem para abraçar!');
}

const abraço = new Discord.MessageEmbed()
.setTitle(`${e.love} Abraço!`)
.setDescription(`${message.author} abraçou ${user}`)
.setImage(rand)
.setFooter('© Todos os Direitos Macaquinho Bot')
.setColor('BROWN');

message.quote(abraço)

}