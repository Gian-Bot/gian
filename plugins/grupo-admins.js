let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*πππππΌππ:* ${pesan}`
let text = 
`β­ββ[ *πππππΎπΌππΏπ πΎπππππ πππππ* ]ββββ¬£ 
${oi}

*πΌπΏππππ:*
${listAdmin}

ππππ π½πΌπ½ππππ ππΌπΌπΌπΌ
β°ββββββ[ *πΉ ${vs}* ]ββββββ¬£`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
  
await conn.sendHydrated(m.chat, null, `πΌππ’ππ£π¨ | ${wm}`, null, 'https://www.facebook.com/gianwalter28', 'ππππ‘ -ππ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉ', '.menu']
], m)//, false, { mentions: [...groupAdmins.map(v => v.id), owner] })  
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
