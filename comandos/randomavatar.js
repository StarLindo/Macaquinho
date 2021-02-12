const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

let av = client.users.cache.random()

const avatar = av.displayAvatarURL({ dynamic: true, size: 2048 })

const avaleatorio = new Discord.MessageEmbed()
.setImage(avatar)
.setTitle('Está aqui seu avatar aleatorio!')
.addField(`Comando Executado Por:`, message.author)
.addField(`A Pessoa que ta usando esse avatar:`, av)
.setColor('RED')


if(message.channel.nsfw) {
message.quote(avaleatorio)
} else {
message.quote(`Ops... ${message.author} esse comando só pode ser usado em canais NSFW.

Motivo:

nesse comando em algum avatar aleatorio pode aparecer alguem com foto NSFW,eu sei que esse motivo parece idiota mas é melhor previnir.`)
}


}