let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Estas minando como siempre🥑','Tremendo minero que eres💩','WOW!! sacaste mucha caca, digo minaste mucho🥰','Bien ahi cacanero, minaste','Y si mejor te pones a trabajar, vago de mierda'])}`
let pp = 'https://media.istockphoto.com/vectors/basic-rgb-vector-id1315251368?b=1&k=6&m=1315251368&s=170667a&w=0&h=2BgQx5Pu2CewGeq93Qxsyoyw5oT4gioHOOIkHb7PoyY='

let xp = Math.floor(Math.random() * 2000)
global.db.data.users[m.sender].exp = xp * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*🤑 Vuelva en ${msToTime(time - new Date())} para seguir minando, CACANERO!*'  

conn.sendHydrated(m.chat, `*${minar} ${xp} 𝙓𝙋*`, wm, pp, md, '𝙂𝙄𝘼𝙉-𝘽𝙊𝙏', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎', `.minar3`],
['𝙈𝙞𝙣𝙖𝙧 𝘾𝙤𝙞𝙣𝙨 👹', `.minar2`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `.menu`]
], m,)
global.db.data.users[m.sender].lastmiming = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

