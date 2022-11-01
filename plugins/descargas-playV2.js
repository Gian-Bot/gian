/*import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Si Tu Me Busca Anuel-Yailin*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗚𝗜𝗔𝗡𝗕𝗢𝗧-𝗙𝗕',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://www.facebook.com/gianwalter28`}}}) 
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗚𝗜𝗔𝗡𝗕𝗢𝗧-𝗙𝗕',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://www.facebook.com/gianwalter28`}}})
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler*/


import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, usedPrefix, conn, text}) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Yeezy, Anuel - Ñengo*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙀𝙇 𝘼𝙐𝘿𝙄𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`, m)  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp3, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `${eg}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`, m)
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp4, 'error.mp4', `${wm}`, m)}
} catch (e) {
m.reply(`${fg}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
handler.level = 7
handler.limit = 1
export default handler
