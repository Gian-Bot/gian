import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀`,
rows: [
      {title: "💥 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 💥", description: null, rowId: `${usedPrefix}creador`},
      {title: "💥 𝘿𝙊𝙉𝘼𝙍 💥", description: null, rowId: `${usedPrefix}donar`},
      {title: "🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆", description: null, rowId: `${usedPrefix}top`},
      {title: "🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 🔊", description: null, rowId: `${usedPrefix}audios`},
      {title: "🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "🌅 𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊 2 🌅", description: null, rowId: `${usedPrefix}menulogos2`},
      {title: "📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "🔞 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 💎", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄", description: null, rowId: `términos`},
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text: `╭─────────────────────❀
💯\n│${ucapan()}\n│🔥•.¸👹¸.• *${name}* •.¸👹¸.•🔥\n╰─────────────────────❀
╭━━━〔 *${wm}* 〕━━━⬣
┃✪ *Tiempo Actual*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión del BOT*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) | Users*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo | Mode*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s) | Prohibited Users*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━━━⬣`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendMessage(m.chat, listMessage)
//await conn.relayMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
//await conn.sendMessage(m.chat, { text: listMessage, mentions: [m.sender] }, { quoted: fkontak, m })
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A)* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches* 💫"
  }
  return res
} 



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)

let menu = `╭───────────────────💯\n│${ucapan()}\n│🔥•.¸👹¸.• *${name}* •.¸👹¸.•🔥\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *Tiempo Actual*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión del BOT*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) | Users*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo | Mode*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s) | Prohibited Users*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━⬣`
//menulista
let menulista = `
╭━━━━━━━━━━━━━━━━━━━⬣
┃ ⚡ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 ⚡
┃ 🔥 ${name}
╰━━━━━━━━━━━━━━━━━━━⬣
${readMore}
╭━━━━━━━━━━━━━━━━━━━⬣
┃ 🔥 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 🔥
┃ _${usedPrefix}creador_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💥 𝘿𝙊𝙉𝘼𝙍 💥
┃ _${usedPrefix}donar_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿 🚀
┃ _${usedPrefix}ping_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌀 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 🌀
┃ _${usedPrefix}allmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🏆 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝙏𝙊𝙍𝙄𝘼 🏆
┃ _${usedPrefix}top_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌟 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 🌟
┃ _${usedPrefix}infomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎡 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 🎡
┃ _${usedPrefix}juegosmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔊 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎 🔊
┃ _${usedPrefix}audios_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧰 𝙈𝙀𝙉𝙐 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 🧰
┃ _${usedPrefix}audioefectomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔰 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔰
┃ _${usedPrefix}grupomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚙️ 𝘾𝙀𝙉𝙏𝙍𝙊 𝘿𝙀 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉 ⚙️
┃ _${usedPrefix}on_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎈 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔 𝙁𝙄𝙇𝙏𝙍𝙊𝙎 🎈
┃ _${usedPrefix}stickermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🛰️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 🛰️
┃ _${usedPrefix}convertidormenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✨ 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝙔 𝙇𝙊𝙂𝙊𝙎 ✨
┃ _${usedPrefix}makermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 📲
┃ _${usedPrefix}descargasmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔍 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼𝙎 🔍
┃ _${usedPrefix}buscarmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⛩️ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙈𝙀 ⛩️
┃ _${usedPrefix}randommenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔞 𝙈𝙀𝙉𝙐 +18 🔞
┃ _${usedPrefix}hornymenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚗️ 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 ⚗️
┃ _${usedPrefix}rpgmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💎 𝙈𝙀𝙉𝙐 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 | 𝙊𝙒𝙉𝙀𝙍 💎
┃ _${usedPrefix}ownermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╰━━━━━━━━━━━━━━━━━━━⬣`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendMessage(m.chat, { text: menulista, mentions: [m.sender] }, { quoted: fkontak, m })
	
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A)* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches* 💫"
  }
  return res
}*/

