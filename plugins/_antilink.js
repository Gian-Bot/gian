let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`${eg}𝘾𝙊𝙈𝙊 𝙀𝙍𝙀𝙎 𝙐𝙉 𝘾𝙃𝙊𝙇𝙊 𝙋𝙊𝙒𝙀𝙍, 𝙉𝙊 𝙎𝙀𝙍𝘼́𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊(𝘼)`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `${ag}𝙏𝙀 𝘾𝙍𝙀𝙀𝙎 𝙃𝘼́𝘽𝙄𝙇\n\n𝘽𝘼𝙉 𝙀𝙉 𝙊𝙉𝙀 𝙈𝙄 𝙍𝙀𝙔 ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}𝘿𝙀𝙉𝙈𝙀 𝘼𝘿𝙈𝙄 𝙈𝙄𝙀𝙍𝘿𝘼, 𝙋𝘼𝙍𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝘼 𝙀𝙎𝙏𝙀 𝙋𝘼𝙑𝙊`}`, author, ['𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`𝙀𝙇 𝙋𝙄𝙉𝙂𝙊𝙉 *18* 𝘾𝙈 𝘿𝙀𝘽𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙀𝙎𝙏𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉\n*#on restrict | #off restrict*`)
}
return !0
}
