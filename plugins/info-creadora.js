import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `𝗚𝗜𝗔𝗡𝗕𝗢𝗧\nWa.me/51986380344\n𝗚𝗜𝗔𝗡𝗕𝗢𝗧 *2* 👹🔥\nWa.me/51946028812\n\n👹 *Eso son los contactos para ti.*\n💙.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `☠𝗚𝗜𝗔𝗡𝗕𝗢𝗧☄`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 𝘿𝙤𝙣𝙖𝙧'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '👹 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await m.reply(`𝗚𝗜𝗔𝗡𝗕𝗢𝗧 💪👻 Wa.me/51986380344\n𝗚𝗜𝗔𝗡𝗕𝗢𝗧 *2* 🔥👹 Wa.me/51946028812`)  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Baboso el que me teclea por priv😡Almenos que sea para agregarnos :v💪'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://www.facebook.com/gianwalter28', '𝗚𝗜𝗔𝗡𝗕𝗢𝗧', 'https://www.instagram.com/gian_walter', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', [
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|creador)$/i
export default handler 
