let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${mg}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 👹 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
conn.sendButton(m.chat, `${eg}𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙏𝙀𝘾𝙇𝙀𝘼𝙍 !!`, `𝙂𝙍𝙐𝙋𝙊 𝘼𝘽𝙄𝙀𝙍𝙏𝙊\n${wm}`, pp, [['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', `.cuentasgb`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', `/menu`]], m)
}
  
if (isClose === 'announcement'){
//m.reply(`${eg}*𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊*\n𝙋𝙐𝙍𝙊 𝘽𝘼𝘽𝙊𝙎𝙊 𝘾𝙄𝙀𝙍𝙍𝘼 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`)
conn.sendButton(m.chat, `${eg}𝙋𝙐𝙍𝙊 𝘽𝘼𝘽𝙊𝙎𝙊 𝘾𝙄𝙀𝙍𝙍𝘼 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊!!`, `𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊\n${wm}`, pp, [['𝙈𝙤𝙢𝙚𝙣𝙩𝙤 𝙇𝙚𝙙𝙚𝙧 🔥', '.s'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹', `/menu`]], m)
}  
 }
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
