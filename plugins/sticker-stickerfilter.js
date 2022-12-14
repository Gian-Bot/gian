import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
${mg}πΏππ½π πΏπ πππΌπ ππ πΎπππΌππΏπ πΏπ ππΌ πππππππππ πππππΌ
*${usedPrefix + command} efecto*

πππππππΏπΌ πΌ πππΌ πππΌπππ
πππππππ 
*${usedPrefix + command} blue*

ππππΎπππ πΏπππππππ½πππ
${effects.map(effect => `_Β» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${fg}ππ ππ πππΎπππππ ππΌ πππΌπππ, πππΎππππΏπ πππππππΏππ πΌ πππΌ πππΌπππ`
if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag}ππ πππππΌππ πΏππ½π πΏπ πππ *jpg o jpeg*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`${fg}ππ ππ πππΏπ ππΌπΎππ ππΌ πΎπππππππππ, ππ ππ ππππΌπ πππππΌπ πππΌ πππΌπππ`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2|stickerefecto|efectosticker|filtrosticker|stickerfiltro)$/i
export default handler
