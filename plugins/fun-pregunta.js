let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙎𝙐 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝘿𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Algun dia anuel me cachara😞?*`   
let pre = `╭━〔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 〕━⬣  
⁉️ 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼
👹 *${text}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼  
🙊 *${['Si','Tal vez sí mano','Tal vez no mi loco','De ley p gordo','Creo que no:( GORDO!','Probablemente no','De ley pe mano','Toy asao mano, no puedo responderte','No','Imposible','Depende mano','Creo que si pero es no','Creo que no','Tas cagao mano','Sigue soñando mano','Preguntas webadas','Y si mejor me chupas la pinga?','Aveces hay que decir, "Ya fue".'].getRandom()}*
╰━━━━━〔 👹 *${vs}* 〕━━━━⬣`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, '𝙂𝙄𝘼𝙉𝘽𝙊𝙏', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 💪', `${usedPrefix + command} ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
