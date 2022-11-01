let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *FB*
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *INSTAGRAM*
*${ig}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*SON TODAS MIS REDES :'V JAJAJ*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://www.facebook.com/gianwalter28', '𝗚𝗜𝗔𝗡𝗕𝗢𝗧', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 💪', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', '/menu']
], m,)}

handler.command = /^cuentasoficiales|giang|cuentasgb|cuentagb|accounts|gianccounts|account|iggian|cuentasdegian|cuentasdegianbot|cuentagianbot|cuentasgianbot$/i
handler.exp = 35
export default handler
