let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Todo un conchesumare','Buena cerrano, obtienes','WOW!! eres un buen saca caca, digo, buen minero','Felicidades!! Ahora tienes mas caca, digo coins'])}`
let pp = 'https://c4.wallpaperflare.com/wallpaper/808/87/756/son-goku-dragon-ball-ultra-instinct-dragon-ball-super-white-hair-hd-wallpaper-preview.jpg'

let gata = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += gata * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastcoins + 600000
if (new Date - global.db.data.users[m.sender].lastcoins < 600000) throw `*π€ Safa sonso, vuelves en ${msToTime(time - new Date())} pars seguir ganando coins, para eso nomas sirves, trabaja vago de mierdaοΈ*`  

conn.sendHydrated(m.chat, `*${minar} ${gian} πΎπ€ππ£π¨*`, wm, pp, md, 'πππΌπ-π½ππ', null, null, [
['πππ£ππ§ πππ β‘', `.minar`],
['πππ£ππ§ πΏπππ’ππ£π©ππ¨ π', `.minar3`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `.menu`]
], m,)
global.db.data.users[m.sender].lastcoins = new Date * 1  
  

//m.reply(`*${minar} *${hasil} ππ*`)

}
handler.help = ['minar2']
handler.tags = ['gian']
handler.command = ['minar2', 'miming2', 'mine2', 'minarcoins', 'minargian'] 
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
