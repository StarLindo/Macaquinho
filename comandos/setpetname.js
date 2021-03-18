const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let petname = args.join(' ')

let pet = db.get(`animal_${message.author.id}`)
if(!pet){
return message.quote(`Você não tem nenhum pet!`)
};

if(!petname){
return message.quote(`Fale algum nome para seu pet!`)
};

if(petname > 20){
return; message.quote(`O nome do pet tem que ter menos de 20 letras!`)
};

db.set(`nomepet_${message.author.id}`, petname)
message.quote(`O novo nome de seu pet é \`${petname}\` `)
}