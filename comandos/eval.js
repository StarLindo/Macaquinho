const { MessageEmbed }= require('discord.js');

module.exports.run = async (client, message, args) => {

  let dev = `697165280761217045`
  let staff = `765958237459185704`

  if (![`${dev}`, `${staff}`, `697165280761217045`].some(a => message.author.id === a)) return message.quote('Apenas meus donos podem usar isso')
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
  
      .setDescription('<a:dl_sim:795202789096816650> Parabens,Você acertou!!\n\n<a:dl_entrada:795203745843642368> **Entrada**: ```' + code + '```\n<a:dl_saida:795203258293026866> **Saida**: ```' + result.slice(0, 2000) + '```')
      .setColor('#00ff00')
      .setFooter('© Todos os Direitos Macaquinho Bot')
    m.edit( { embed: embed })
  } catch (e) {
    let embed = new MessageEmbed(message.author).setTimestamp()
     
      .setDescription(' <a:dl_nao:795202819790602240> Vish,você errou ;-;\n```' + e.stack.slice(0, 2000) + '```')
      .setFooter('© Todos os Direitos Macaquinho Bot')
      .setColor("ff0000")
    m.edit( { embed: embed })
  }
})}