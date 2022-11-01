let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Trabaja vago!','Bien ahi mi rey!!','Para esto si eres bueno, no? MONGOL!','Felicidades!! FRACASADO'])}`
let pp = 'https://us.123rf.com/450wm/emojiimage/emojiimage1802/emojiimage180200332/95468325-mont%C3%B3n-de-piedras-preciosas-diamantes-azules-brillantes-concepto-de-joyas-caras-s%C3%ADmbolo-de-riqueza-d.jpg?ver=6'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `*🤑 Vuelva en ${msToTime(time - new Date())} para seguir con tu webada️*`  

conn.sendHydrated(m.chat, `*${minar} ${d} 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨*`, wm, pp, md, '𝙂𝙄𝘼𝙉-𝘽𝙊𝙏', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝙀𝙓𝙋 ⚡', `.minar`],
['𝙈𝙞𝙣𝙖𝙧 𝘾𝙤𝙞𝙣𝙨 👹', `.minar2`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `.menu`]
], m,)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
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
