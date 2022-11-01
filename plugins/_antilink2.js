let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0 
}    
await conn.sendButton(m.chat, `${ag}𝙏𝙀 𝘾𝙍𝙀𝙀𝙎 𝙃𝘼́𝘽𝙄𝙇\n\n𝘽𝘼𝙉 𝙀𝙉 𝙊𝙉𝙀 𝙈𝙄 𝙍𝙀𝙔 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝙉𝙈𝙀 𝘼𝘿𝙈𝙄 𝙈𝙄𝙀𝙍𝘿𝘼, 𝙋𝘼𝙍𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙀𝙎𝙏𝙀 𝙋𝘼𝙑𝙊`}`, wm, ['𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`𝙀𝙇 𝙋𝙄𝙉𝙂𝙊𝙉 *18* 𝘾𝙈 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n*#on restrict | #off restrict*`)
}
return !0
}
