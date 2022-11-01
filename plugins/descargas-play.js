import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} AK-47 Remix*`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw `${fg}𝙉𝙊 𝙀𝙉𝘾𝙐𝙀𝙉𝙏𝙍𝙊 𝙏𝙐 𝙒𝙀𝘽𝘼𝘿𝘼, 𝙄𝙉𝙏𝙀𝙉𝙏𝘼 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊 𝙉𝙊𝙈𝘽𝙍𝙀 `
  try {
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
╭━━━━━━━❰  *👹*  ❱━━━━━━━⬣
✦ 𝙏𝙄𝙏𝙐𝙇𝙊 
✦ ${title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 
✦ ${description}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 
✦ ${publishedTime}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 
✦ ${durationH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙑𝙄𝙎𝙏𝘼𝙎 | 𝙑𝙄𝙀𝙒𝙎
✦ ${viewH}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✦ 𝙐𝙍𝙇
✦ ${url}
╰━━━━━━━❰ *${vs}* ❱━━━━━━⬣`.trim(), wm, thumbnail, '', '', null, null, [
    ['𝙑𝙞𝙙𝙚𝙤 | 1️⃣', `${usedPrefix}ytv ${url} yes`],
    ['𝙑𝙞𝙙𝙚𝙤 | 2️⃣', `${usedPrefix}play.2 ${url} yes`],
    ['𝘼𝙪𝙙𝙞𝙤 | 1️⃣', `${usedPrefix}yta ${url} yes`]
  ], m)
    let info = `💥 𝙀𝙎𝙏𝙀 𝙏𝘼𝙈𝘽𝙄𝙀́𝙉 𝙏𝙀 𝙋𝙐𝙀𝘿𝙀 𝙂𝙐𝙎𝙏𝘼𝙍..`.trim()  
await conn.sendHydrated(m.chat, info, wm, thumbnail, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝘼𝙪𝙙𝙞𝙤 | 2️⃣', `${usedPrefix}play.1 ${url} yes`],
['𝘽𝙪𝙨𝙘𝙖𝙧 | 🌐', `.ytsearch ${url} yes`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹', `/menu`]
], m,)
    
}catch(e){
m.reply(`${fg}𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.exp = 20
handler.limit = 1
export default handler
