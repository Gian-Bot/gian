import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ ππππππ πππ πππΌπ "@"\nπππππππ\n*${usedPrefix + command} brrr*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
π€ ππππΌπππ(πΌ) 
${json.result.username}
βββββββββββββββββ
β¨ ππππ½ππ 
${json.result.nickname}
βββββββββββββββββ
β ππππππΏππππ 
${json.result.followers}
βββββββββββββββββ
βοΈ ππππππΏππ
${json.result.followings}
βββββββββββββββββ
β€οΈ ππ πππππΌ 
${json.result.likes}
βββββββββββββββββ
π πππ½πππΎπΌπΎπππππ 
${json.result.video}
βββββββββββββββββ
π π½πππππΌπΓπΌ 
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gian, m, false)
} catch (e) {
throw `${fg}ππ ππ πππΎπππππ ππ ππππ½ππ πΏπ ππππΌπππ.`
}
let info = `π₯ *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ π₯', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '/menu']
], m,)  

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
