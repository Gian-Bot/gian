import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

/*const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ | πΏπππ-πΏπππ ππππ`,
rows: [
{title: "π₯οΈ πππ£πͺ ππ§ππ£πππ₯ππ‘ π₯οΈ", description: null, rowId: `${usedPrefix}menu`},
{title: "π₯οΈ πππ£πͺ πΎπ€π’π₯π‘ππ©π€ π₯", description: null, rowId: `${usedPrefix}allmenu`},
{title: "β πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β", description: null, rowId: `${usedPrefix}cuentasgianbot`},
{title: "π π½πͺπ¨πππ§ πΌπ£ππ’π π", description: "πππΏππΌπ π½πππΎπΌπ πππππππΌπΎπππ πΏπ πΌπππππ", rowId: `${usedPrefix}animeinfo`},
{title: "π π½πͺπ¨π¦πͺπππ ππ£ ππ€π€ππ‘π π", description: "π½πππΎπΌ ππΌπ πππππππΌπΎπππ πππ ππππππ", rowId: `${usedPrefix}google`},
{title: "π π½πͺπ¨πππ§ πππ©π§ππ¨ π", description: "ππ½πππ ππΌπ πππππΌ πΏπ ππΌπ πΎπΌππΎπππππ", rowId: `${usedPrefix}letra`},   
{title: "π π½πͺπ¨ππ π₯π€π§ ππ€πͺππͺππ π", description: "π½πππΎπΌ ππππΌπΎππ πΏπ πππΏπππ π πΎπΌππΌπππ", rowId: `${usedPrefix}ytsearch`},    
{title: "π π½πͺπ¨πππ§ π₯π€π§ πππ ππ₯ππππ π", description: "πππΎππππππΌ πππππππΌπΎπππ ππ πππππππΏππΌ", rowId: `${usedPrefix}wiki`},      
]}, ]*/
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false


let menu = `
π₯ *Β‘HABLA!* ${username}
β­ββγ *${wm}* γβββ¬£
βπ°π°π°π°π°π°π°π°π° 
ββͺ *EXPERIENCIA | EXP βΊ ${exp}*
ββͺ *NIVEL | LEVEL βΊ ${level}*
ββͺ *ROL βΊ* ${role}
ββͺ *COINS βΊ $ ${money}*
βββββββββββββββββββ
ββͺ *FECHA βΊ ${week}, ${date}*
ββͺ *USUARIOS | USERS βΊ ${Object.keys(global.db.data.users).length}* 
βπ°π°π°π°π°π°π°π°π°
β°ββββββγ πΉ *${vs}* γβββββββ¬£

β­βγ ππππ πΏπ πππππ | πππππ γββ¬£
βββββββββββββββββββ
βπβΊ _${usedPrefix}add *numero*_
βπβΊ _${usedPrefix}sacar | ban | kick  *@tag*_
βπβΊ _${usedPrefix}grupo *abrir : cerrar*_
βπβΊ _${usedPrefix}group *open : close*_
βπβΊ _${usedPrefix}daradmin | promote *@tag*_
βπβΊ _${usedPrefix}quitar | demote *@tag*_
βπβΊ _${usedPrefix}banchat_
βπβΊ _${usedPrefix}unbanchat_
βπβΊ _${usedPrefix}banuser *@tag*_
βπβΊ _${usedPrefix}unbanuser *@tag*_
βπβΊ _${usedPrefix}admins *texto*_
βπβΊ _${usedPrefix}invocar *texto*_
βπβΊ _${usedPrefix}tagall *texto*_
βπβΊ _${usedPrefix}hidetag *texto*_
βπβΊ _${usedPrefix}infogrupo | infogroup_
βπβΊ _${usedPrefix}configuracion_
βπβΊ _${usedPrefix}settings_
βπβΊ _${usedPrefix}vergrupo_
βπβΊ _${usedPrefix}enlace | link_
βπβΊ _${usedPrefix}newnombre | setname *texto*_
βπβΊ _${usedPrefix}newdesc | setdesc *texto*_
βπβΊ _${usedPrefix}setwelcome *texto*_
βπβΊ _${usedPrefix}setbye *texto*_
βπβΊ _${usedPrefix}on_
βπβΊ _${usedPrefix}off_
β°ββββββββββββββββββββ¬£`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ π₯', '.allmenu'],
['πππ£πͺ πππ¨π₯π‘πππππ‘π π₯', '/menulista'],
['πππ£πͺ ππ§ππ£πππ₯ππ‘ πΉ', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(grupomenu)$/i
//handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
