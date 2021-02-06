const Discord = require('discord.js')
const { parse } = require('twemoji-parser')

module.exports.run = async (client, message, args, prefix) => {

   const emoji = args[0];
   if (!emoji) return message.quote("Mande algum emoji!");

   let custom = Discord.Util.parseEmoji(emoji);

   if (custom.id) {
      const embed = new Discord.MessageEmbed()
         .setDescription(`[Quer Baixar o Emoji?Clique aqui!](https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"})`)
         .setColor("RED")
         .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
      return message.quote(embed);
   } else {
      let parsed = parse(emoji, { assetType: "png" });
      if (!parsed[0]) return message.quote("Emoji invalido!!");
      const embed = new Discord.MessageEmbed()
         .setDescription(`[Quer Baixar o Emoji?Clique aqui!](${parsed[0].url})`)
         .setColor("RED")
         .setImage(parsed[0].url);
      return message.quote(embed);
   }
}
