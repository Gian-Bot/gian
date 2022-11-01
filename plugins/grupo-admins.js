let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* ${pesan}`
let text = 
`╭━━[ *𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘾𝙃𝙊𝙇𝙊𝙎 𝙋𝙊𝙒𝙀𝙍* ]━━━⬣ 
${oi}

*𝘼𝘿𝙈𝙄𝙉𝙎:*
${listAdmin}

𝙋𝙐𝙍𝙊 𝘽𝘼𝘽𝙊𝙎𝙊𝙎 𝙅𝘼𝘼𝘼𝘼
╰━━━━━━[ *👹 ${vs}* ]━━━━━⬣`.trim()

await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
  
await conn.sendHydrated(m.chat, null, `𝘼𝙙𝙢𝙞𝙣𝙨 | ${wm}`, null, 'https://www.facebook.com/gianwalter28', '𝗚𝗜𝗔𝗡 -𝗙𝗕', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹', '.menu']
], m)//, false, { mentions: [...groupAdmins.map(v => v.id), owner] })  
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
