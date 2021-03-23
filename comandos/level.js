const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);

if(!pessoa){
pessoa = message.author
}

let levelzin2 = db.fetch(`levelzin_${pessoa.id}_${message.guild.id}`)
if(!levelzin2){
levelzin2 = 0
}
let xpzin2 = db.fetch(`xpzin_${pessoa.id}_${message.guild.id}`)
if(!xpzin2){
xpzin2 = 0
}
const embed = new Discord.MessageEmbed()

.setDescription(`
**<:BP_canal_loja:766666245721817128>  »  Status de ${pessoa}.**
>>> 🪄  |  Experiência: **${xpzin2}**
🔮  |  Nível: **${levelzin2}**
<a:BP_novo_level:754350267872444477>  |  Experiência para o próximo nível: **${1000 - xpzin2}**
`)
.setColor("RED")
.setThumbnail(pessoa.avatarURL())
message.quote(embed)
}