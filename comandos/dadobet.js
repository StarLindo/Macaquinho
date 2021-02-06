const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {


let money = args[0] 

let money2 = db.get(`money_${message.author.id}`)

if(money2 < money){
  return message.quote('Você não tem esse dinheiro para apostar no dado!')
}


let add = Math.floor(Math.random() * money) + 0;

if(!money)return message.quote('Insira algo no dado,exemplo:\nm.dadobet `24`');

message.quote(`Você girou o dado e caiu... ${add},Ja que caiu ${add} Você ganhou **R$${add}**`);
 db.add(`money_${message.author.id}`, add);

}