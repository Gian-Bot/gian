let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `${mg}ππππππππ πΌ ππΌ πππππππΌ πππ ππΌ πππ ππππΌπππ(πΌ) πππ π\n\nπππππππ\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `${iig}ππ/ππΌ ππππΌπππ(πΌ) ππΌ ππ πππ β¨`
global.prems.push(`${who.split`@`[0]}`)
  //user.premium = true
conn.reply(m.chat, `${eg}@${who.split`@`[0]} πΌππππΌ ππ ππππΌπππ(πΌ) πππ. ππ ππΌ πππππ πππππππ πΎππ ${gt} πΉ`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
