import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/BOBdMVt.jpeg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`β ππππ½ππ ${name}
ββββββββββββββββββ
β ππππππ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
ββββββββββββββββββ
β ππππΌπΎπ wa.me/${who.split`@`[0]}${registered ?'\nββββββββββββββββββ\nβ ππΏπΌπΏ ' + age + ' *aΓ±os*' : ''}
ββββββββββββββββββ
β πππππππ *${limit}* ππ ππ¨π€π¨
ββββββββββββββββββ
β ππππππππΌπΏπ(πΌ) ${registered ? 'β': 'β'}
ββββββββββββββββββ
β πππππππ ${prem ? 'β' : 'β'}
ββββββββββββββββββ
β ππππππ πΏπ πππππ
β *${sn}*`
conn.sendButton(m.chat, str, wm, await(await fetch(pp)).buffer(), [['πππ§ππππππ§', '/verificar β'], ['ππͺπ ππ’π₯ππππ π‘π ππ«ππ£π©πͺπ§π!! π', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
