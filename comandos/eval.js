const { MessageEmbed }= require('discord.js');

module.exports.run = async (client, message, args) => {

  let dev = `697165280761217045`
  let staff = `697165280761217045`

  if (![`${dev}`, `${staff}`, `697165280761217045`].some(a => message.author.id === a)) return message.quote('Só o meu dono pode usar isso')
  const code = args.join(' ')
  if (!code)
    return message.quote(
      `Insira um valor para executar o eval.`
    );
await message.quote('Executando o codigo...').then(async m => {
  try {
    let beforeRunning = Date.now()
    let result = eval(code)

    if (result instanceof Promise) {
      m.edit('Uma promise encontrada,estou esperando ela ser resolvida!')
      await result
    }
    if (typeof result !== 'string') result = require('util').inspect(result)
    let end = (Date.now() - beforeRunning)
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(' • Parabens,Você acertou!!')
      .setDescription('```' + result.slice(0, 2000) + '```')
      .setColor('#00ff00')
    m.edit( { embed: embed })
  } catch (e) {
    let embed = new MessageEmbed(message.author).setTimestamp()
      .setAuthor(' • Vish,você errou ;-;')
      .setDescription('```' + e.stack.slice(0, 2000) + '```')
      .setColor("ff0000")
    m.edit( { embed: embed })
  }
})}