let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
β­βγ π *BALANCE* γββ¬£
β *USUARIO(A)*
β ${name}
βββββββββββββββ
β *${global.db.data.users[who].limit} Diamantes* π
β°ββββγ *πΉ ${vs}* γββββ¬£`)

let d = `
*COMPRAR DIAMANTES CON EXP*
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON COINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`

await conn.sendHydrated(m.chat, d, wm, null, md, 'πππΌπ-π½ππ', null, null, [
['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '#menu'],
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ π«', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
