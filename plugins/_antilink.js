let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`${eg}πΎπππ ππππ ππ πΎππππ πππππ, ππ ππππΌΜπ πππππππΌπΏπ(πΌ)`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `${ag}ππ πΎππππ ππΌΜπ½ππ\n\nπ½πΌπ ππ πππ ππ πππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππππ πΌπΏππ πππππΏπΌ, ππΌππΌ πππππππΌπ πΌ ππππ ππΌππ`}`, author, ['πΏπππΌπΎππππΌπ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`ππ ππππππ *18* πΎπ πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n*#on restrict | #off restrict*`)
}
return !0
}
