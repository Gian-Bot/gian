let handler = async (m, { conn }) => { 
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nπΉ ${await conn.getName(jid)}\nβ¦ ${jid} \n${chat?.metadata?.read_only ? 'β *SIN ESTAR AQUΓ | NO*' : 'β *SIGO AQUΓ | YES*'}\n\n`
m.reply(`*${gt} ESTΓ EN ESTOS GRUPOS*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://www.facebook.com/gianwalter28', 'ππππ‘-ππ’π§', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '.menu'],
['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β', '/cuentasgb']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
