import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `*β­ββ[ πΎππππππΎπΌπΏπ | πππππΎπ ]ββββ¬£*\n*β*\n*βπ* ${text}\n*β*\n*β°βββββββββββββββββββ¬£*`, 'β *πΎππππππΎπΌπΏπ ππππΎππΌπ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentasgb'],['πΉ πππ£πͺ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'πππΌπ-π½ππ',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gian_walter`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} β *El mensaje fue enviado a ${chats.length} Chats Privados*\n*Es posible que no se haya enviado a todos los Chats Privados. Disculpe.*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.rowner = true
export default handler
