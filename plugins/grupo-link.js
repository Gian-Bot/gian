let handler = async (m, { conn, args }) => {
let group = m.chat
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
//m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
  
conn.sendHydrated(m.chat, ('https://chat.whatsapp.com/' + await conn.groupInviteCode(group)), wm, pp, md, 'ððððĄððĒð§', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ ðđïļ', '/menu']], m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^enlace|link(gro?up)?$/i
handler.group = true
//handler.admin = false
handler.botAdmin = true
export default handler
