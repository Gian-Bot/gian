let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
β­βγ π *CARTERA* γββ¬£
β ${name} ππ£ π¨πͺ πΎππ§π©ππ§π π©πππ£π...
β *${global.db.data.users[who].limit} Diamante(s)* π
β *${global.db.data.users[who].money} Coin(s)* πΉ
β *${global.db.data.users[who].exp} EXP* β‘
β *${global.db.data.users[who].joincount} Token(s)* πΉ
β°ββββγ *πΉ ${vs}* γββββ¬£`)

await conn.sendHydrated(m.chat, wm, `Puede comprar mΓ‘s recuersos econΓ³micos usando estos comandos\n\nCOMPRAR DIAMANTES CON EXP\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nCOMPRAR DIAMANTES CON COINS\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nCOMPRAR TOKENS CON DIAMANTES\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, null, md, 'πππΌπ-π½ππ', null, null, [
['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '#menu'],
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ π«', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
