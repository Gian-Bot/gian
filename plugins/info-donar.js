let media = './media/menus/Menu4yape.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/Gianwalter`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/Gianwalter`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', `/menu`]]
  
let str = `
💪 𝗛𝗼𝗹𝗮, 𝗮𝗴𝗿𝗮𝗱𝗲𝘇𝗰𝗼 𝗾𝘂𝗲 𝗺𝗲 𝗲𝘀𝘁𝗲́𝘀 𝗱𝗮𝗻𝗱𝗼 𝘂𝗻 𝗽𝗼𝗰𝗼 𝗱𝗲 𝘁𝘂 𝘀𝘂𝗲𝗹𝗱𝗼 𝗺𝗶́𝗻𝗶𝗺𝗼, 𝗮𝗽𝗮𝗿𝘁𝗲 𝗾𝘂𝗲 𝗲𝗿𝗲𝘀 𝘂𝗻 𝗲𝘀𝗰𝗹𝗮𝘃𝗼 𝗲𝗻 𝘁𝘂 𝘁𝗿𝗮𝗯𝗮𝗷𝗼 𝘆 𝗴𝗮𝗻𝗮𝘀 𝘂𝗻𝗮 𝗺𝗶𝘀𝗲𝗿𝗶𝗮 𝘆 𝘁𝗲 𝗴𝗮𝘀𝘁𝗮𝘀 𝗲𝗻 𝘁𝗼𝗻𝘁𝗲𝗿𝗶́𝗮𝘀, 𝗽𝗲𝗿𝗼 𝗱𝗲 𝗮𝗻𝘁𝗲𝗺𝗮𝗻𝗼. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/Gianwalter', '🎁 𝘿𝙤𝙣𝙖𝙧', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💙', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
