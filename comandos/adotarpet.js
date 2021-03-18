const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

if(db.get(`animal_${message.author.id}`)){
return message.quote(`Você ja tem um animal,pra que quer outro?`)
}

let adp = new Discord.MessageEmbed()
.setTitle(`Comando de adotar pet!`)
.setDescription(`__Sobre o Comando__
Comando De adotar animal.

__Animais Disponiveis Por Enquanto__
Cachorro,Gato E Hamster.

__Como usar__
mk.adotarpet cachorro/gato/hamster`)
.setColor('#800080')

  if(!['gato', 'cachorro', 'hamster'].includes(args[0])){
    return message.quote(adp)
  }

let gato = '<a:cat_andando:811323155950993438> Gato'
let cachorro = '<:doguinho_fofo:811323593987457074> Cachorro'
let hamster = '<a:hamster:797855621034278915> Hamster'

  if(args[0] === 'gato'){
    db.set(`animal_${message.author.id}`, gato)
    message.quote('Seu novo animal é um gatinho!')
  }

if(args[0] === 'hamster'){
    db.set(`animal_${message.author.id}`, hamster)
    message.quote('Seu novo animal é um hamsterzinho!')
  }

  if(args[0] === 'cachorro'){
    db.set(`animal_${message.author.id}`, cachorro)
    message.quote('Seu novo animal é um cachorrinho!')
  }




}