import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/mas feo.mp3'
conn.sendFile(m.chat, vn, 'mas feo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /feo|Feo|FEO/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
