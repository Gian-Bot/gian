let handler = async (m, { conn, text, usedPrefix, command }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}πππππππ ππ ππππππ πΌπ πππ ππ ππ ππΌππΌ πππΌπ\n*β ${usedPrefix + command} numero|texto|cantidad*\nπππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*`
if (!pesan) throw `${mg}πππππππ ππ ππππππ πΌπ πππ ππ ππ ππΌππΌ πππΌπ\n*β ${usedPrefix + command} numero|texto|cantidad*\nπππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*`
if (jumlah && isNaN(jumlah)) throw `ππ πΎπΌππππΏπΌπΏ πΏππ½π πΏπ ππ ππ ππππππ πΌπ πππ ππ ππ ππΌππΌ πππΌπ\n*β ${usedPrefix + command} numero|texto|cantidad*\nπππππππ\n*β ${usedPrefix + command} 999999999999|Holaaa|35*`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw `${fg}ππππππ *50* πππππΌπππ ππΌππΌ ππΌπΎππ ππ πππΌπ`
await m.reply(`${eg}ππ πππΌπ ππ πππππ *${fixedJumlah}* πππΎππ πΌ *${nomor}*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
export default handler 
