import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `ππππ‘ππ’π§\nWa.me/51986380344\nππππ‘ππ’π§ *2* πΉπ₯\nWa.me/51946028812\n\nπΉ *Eso son los contactos para ti.*\nπ.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `β ππππ‘ππ’π§β`,
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
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π πΏπ€π£ππ§'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'πΉ ππ£ππ€π§π’ππππ€π£'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: 'π« πππ£πͺΜ ππ€π’π₯π‘ππ©π€'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await m.reply(`ππππ‘ππ’π§ πͺπ» Wa.me/51986380344\nππππ‘ππ’π§ *2* π₯πΉ Wa.me/51946028812`)  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'Baboso el que me teclea por privπ‘Almenos que sea para agregarnos :vπͺ'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§', 'https://www.instagram.com/gian_walter', 'ππ£π¨π©πππ§ππ’', [
['β ππ§ ππ‘ ππ£ππππ€', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|creador)$/i
export default handler 
