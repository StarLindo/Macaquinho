const Discord = require("discord.js")

module.exports.run = async(client,message,args)=>{

const embed = new Discord.MessageEmbed()
.setTitle(`Padaria!`)
.setColor("#EE82EE")
.setDescription(`Coisas Para comprar:
Fruta Level:Você ganha o dobro de xp,custa R$100.000,00 Dinheiros,para comprar use **mk.comprar fruta-level**

Pao do Dinheiro:Você ganha o dobro de dinheiro nos comandos de trabalho de rp (role play),custa R$100.000,00 Dinheiros,para comprar use **mk.comprar pao-dinheiro**

Você pode comprar coisas com o comando: Comprar <coisa>

Mais coisas em breve...`)

message.quote(embed)
}