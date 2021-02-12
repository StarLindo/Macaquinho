const Discord = require('discord.js')

exports.run = (client, message, args) => {

let dd = args[0] 

if (isNaN(args[0])){
        return message.quote(`Você tem que inserir uma quantidade numerica!`);
    };

let add = Math.floor(Math.random() * dd) + 0;

if(!dd)return message.quote('Insira algo no dado,exemplo:\nm.dado `24`');

message.quote(`Você girou o dado e caiu... ${add} `)

}