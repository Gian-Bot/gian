import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}πππππππ ππΌ πΎπΌππππΏπΌπΏ πΏπ πΏππΌππΌππππ`
if (isNaN(txt)) throw `${mg}πππ ππππ½ππππ, ππππ πππππππ πππππππ`
let gatacoins = parseInt(txt)
let money = coins
let pjk = Math.ceil(coins * pajak)
money -= pjk
if (money < 1) throw `${mg}ππ ππππππ ππππππ πΏπ πΎππππ ππ *1*`
let users = global.db.data.users
users[who].money -= coins

conn.sendHydrated(m.chat, `β­βββ[ πΎππππ πΉ ]ββββ¬£\nβ\nβα¦ *PARA:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *SE ELIMINΓ*\nβα¦ *${coins} Coin(s)* πΉ\nβ\nβ°βββββββββββββββ¬£`, wm, null, md, 'πππΌπ-π½ππ', null, null, [
['π₯ πππ£πͺ πΌπ«ππ£π©πͺπ§π | πππ π₯', '.rpgmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], m)
}
handler.help = ['addgb <@user>']
handler.tags = ['coins']
handler.command = ['eliminarcoins', 'quitarcoins', 'delcoins'] 
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler 
