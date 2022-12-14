import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `${ag}๐๐๐ฟ๐ผ๐๐๐ผ ๐ผ๐๐๐๐๐๐ ๐๐๐๐ผ ๐๐๐๐ผ๐๐ฟ๐ ๐๐ ๐๐ผ ๐๐ผ๐๐ผ ๐๐ ๐๐๐๐๐๐๐ ๐ผ๐ฝ๐ผ๐๐ฟ๐๐๐ผ๐ ๐๐๐พ๐๐๐ฝ๐ผ *salir*\n๐๐ผ๐๐ฝ๐๐๐ ๐๐๐๐ฟ๐๐ ๐๐๐๐๐๐๐ผ๐ ๐๐ผ ๐๐ผ๐๐ผ ๐๐๐ผ๐๐ฟ๐ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐ *${usedPrefix}delttt*`
if (!text) throw `${fg}๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐ผ๐๐๐๐๐ผ๐ ๐๐ ๐๐๐๐ฝ๐๐ ๐ผ ๐๐ผ ๐๐ผ๐๐ผ\n๐๐๐๐๐๐๐*${usedPrefix + command} Sala del pingon*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.sendButton(m.chat, `${eg}๐ผ๐๐๐๐๐๐ ๐๐ ๐๐ผ ๐๐๐๐ฟ๐ ๐ผ ๐๐ผ ๐๐ผ๐๐ผ *${text}*\n๐๐ผ ๐๐๐๐ฟ๐๐ ๐๐๐๐ผ๐!! ๐ฅ`, wm, null, [['๐๐ช๐ ๐๐๐ฃ๐ ๐ฒ๐น ๐บ๐ฎฬ๐ ๐ถ๐ฑ๐ถ๐ผ๐๐ฎ ๐', '๐ป'] ], fkontak, m)

await conn.sendButton(m.chat, `${rg}โญ๏ธ *Clรกsico Juego de 3 en raya* โ\n\n*ยฟCรณmo jugar?*\n_Responde al Juego con un Nรบmero, el mensaje debe contener la posiscion en la que quieras estar (1,2,3,4,5,6,7,8,9)_`, wm, null, [['๐ฅ ๐๐ ๐๐๐ผ๐พ๐๐ผ๐', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'โ',
O: 'โญ',
1: '1๏ธโฃ',
2: '2๏ธโฃ',
3: '3๏ธโฃ',
4: '4๏ธโฃ',
5: '5๏ธโฃ',
6: '6๏ธโฃ',
7: '7๏ธโฃ',
8: '8๏ธโฃ',
9: '9๏ธโฃ',
}[v]})
let str = `๐ฅ ๐๐๐๐๐ ๐๐๐๐ ๐๐ ๐๐ผ๐๐ผ
๐ซ ๐๐๐๐ผ๐ฟ๐๐๐๐ *:
*โโโโโโโโโ*
โ = @${room.game.playerX.split('@')[0]}
โญ = @${room.game.playerO.split('@')[0]}
*โโโโโโโโโ*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*โโโโโโโโโ*
๐๐๐๐๐ ๐ฟ๐ *:
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendButton(m.chat, `๐น ๐๐๐๐๐ ๐๐๐๐ ๐๐ ๐๐ผ๐๐ผ 

๐น ๐๐๐๐๐๐ผ๐๐ฟ๐ ๐ผ๐ ๐๐๐๐๐๐ฟ๐ ๐๐๐๐ผ๐ฟ๐๐ ๐๐๐๐ฟ๐ ๐๐๐๐๐๐๐ผ๐ ๐พ๐๐ ๐๐ ๐ฝ๐๐๐๐ ๐ฟ๐ ๐ผ๐ฝ๐ผ๐๐ ๐ ๐๐๐ผ๐๐ฟ๐ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐ 
*${usedPrefix + command} ${text}*

๐๐ ๐๐๐๐๐๐๐ ๐ผ๐ฝ๐ผ๐๐ฟ๐๐๐ผ๐ ๐๐ผ ๐๐ผ๐๐ผ ๐๐๐ผ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐ *${usedPrefix}delttt*`, wm, imgplay, [['๐ ๐๐๐๐๐๐ ๐ผ๐ ๐๐๐๐๐', `${usedPrefix + command} ${text}`]], fkontak, m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
