import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/esa cruz.mp3'
conn.sendFile(m.chat, vn, 'esa cruz.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Esa cruz|esa cruz/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
