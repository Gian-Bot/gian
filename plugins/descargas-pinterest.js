import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ๐๐๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐๐๐๐๐๐ ๐๐ผ๐๐๐๐ผ\n*${usedPrefix + command} Anuel desnudo*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
โฐโฑ๐นโฑ *๐ฬ๐๐๐๐* โฑ๐นโฑโฎ`.trim(), m)
  
  conn.sendHydrated(m.chat, `๐ฅ ๐๐๐จ๐ช๐ก๐ฉ๐๐๐ค: ${text}`, `๐๐๐ฃ๐ฉ๐๐ง๐๐จ๐ฉ | ${wm}`, null, md, '๐๐๐๐ก๐๐ข๐ง', null, null, [
['๐ ๐๐๐๐ช๐๐๐ฃ๐ฉ๐', `/pinterest ${text}`],
['๐ ๐๐ค๐ค๐๐ก๐ ', `#image ${text}`],
['๐น ๐๐๐ฃ๐ช', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
