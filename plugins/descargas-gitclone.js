import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππΎπππ½πΌ ππ ππππΌπΎπ πΏπ ππππππ½\nπππππππ\n*${usedPrefix + command} https://github.com/Gian-Bot*`
if (!regex.test(args[0])) throw `${fg}ππππΌπΎπ ππ ππΌπππΏπ.`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}πππππΌππΏπ πΌππΎππππ, ππ πππππππ π\nππ ππ ππ πππππΌ ππ πΌππΎππππ ππ πΏππ½ππΏπ πΌ πππ ππ πππππππππππ ππ ππππΌπΏπ.`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `π₯ *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ π₯', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '/menu']
], m,)  
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.exp = 59
export default handler
