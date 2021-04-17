const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
if(!['fruta-level', 'pao-dinheiro'].includes(args[0])){
    return message.quote(`**Isso que você escreveu não esta disponivel para comprar,use o comando \`padaria\` Para ver os itens disponiveis!**`)
  }

  let money = db.fetch(`money_${message.author.id}`)

let paofrances = 100000
if(db.get(`${message.author.id}_premium`)){
paofrances = 90000
}

if(money < paofrances){
return message.quote(`**Você precisa de pelo menos R$100.000,00 dinheiros para comprar qualquer coisa da padaria!**`)
}


  if(args[0] === 'fruta-level'){
   message.quote(`**Ok,você comprou a fruta level!**`)
   db.subtract(`money_${message.author.id}`, paofrances)
   db.set(`${message.author.id}_frutalevel`, true)
  }

  if(args[0] === 'pao-dinheiro'){
   message.quote(`**Ok,você comprou o pao dinheiro!**`)
   db.subtract(`money_${message.author.id}`, paofrances)
   db.set(`${message.author.id}_paodinheiro`, true)
  }

}