const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const db = require('quick.db')

module.exports.run = async (client, message, args) => {

  let dev = `697165280761217045`
  let staff = `470976775145390082`

  if (![`${dev}`, `${staff}`, `697165280761217045`, `705226061507723346`].some(a => message.author.id === a)) return message.quote('Apenas meus donos podem usar isso')
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
    
    await m.edit(`Deu isso Chefe:
    \`\`\`${result.slice(0, 2000)}\`\`\` `)
  } catch (e) {
    
    await m.edit(`Deu errado Parça...
    \`\`\`${e.stack.slice(0, 2000)}\`\`\` `)
  }
})}