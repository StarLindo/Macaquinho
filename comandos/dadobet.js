const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (client, message, args) => {

let money = args[0] 

let money2 = db.fetch(`money_${message.author.id}`)

if(money2 < money){
  return message.quote('Você não tem esse dinheiro para apostar no dado!')

}

if (isNaN(args[0])){
        return message.quote(`Você tem que inserir uma quantidade numerica!`);
    };

let add = Math.floor(Math.random() * money) + 0;

if(!money)return message.quote('Insira algo no dado,exemplo:\nm.dadobet `24`');

let user = message.author;

    let timeout = 120000;

    let aposta = await db.get(`aposta_${user.id}`);
    
    if(money = 0){
    return message.quote(`Como você vai apostar nada?`)
    }
    
    if (aposta !== null && timeout - (Date.now() - aposta) > 0) {
        let time = ms(timeout - (Date.now() - aposta));
  
        
            
        message.quote(`Espere **${time.minutes}m ${time.seconds}s** Para apostar denovo!`);

    } else {



message.quote(`Você girou o dado e caiu... ${add},Ja que caiu ${add} Você ganhou **R$${add}**`);
 db.add(`money_${message.author.id}`, add);

db.set(`aposta_${user.id}`, Date.now());

}
}