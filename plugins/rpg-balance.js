let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
╭━〔 🔖 *BALANCE* 〕━⬣
┃ *USUARIO(A)*
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *${global.db.data.users[who].limit} Diamantes* 💎
╰━━━━〔 *👹 ${vs}* 〕━━━⬣`)

let d = `
*COMPRAR DIAMANTES CON EXP*
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON COINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`

await conn.sendHydrated(m.chat, d, wm, null, md, '𝙂𝙄𝘼𝙉-𝘽𝙊𝙏', null, null, [
['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '#menu'],
['𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 💫', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
