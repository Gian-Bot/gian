import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw `${mg}πππππππ ππ ππππΌπΎπ ππΌππΌ πΌπΎππππΌπ`
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `β ππ πππΌππππ πΎππ πππππ\n\nππππΌπΎπ πΏπ πΌππππ\n*${text}*\n\nππππΌπΎπ πΏπ πΌππππΌ\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
