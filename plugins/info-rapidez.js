let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*`.trim()
  m.reply(txt)

await m.reply('๐')
await m.reply('๐๐')
await m.reply('๐๐๐')
await m.reply(`โฐโฑโโฑ *๐๐๐๐๐๐๐ผ๐ฟ๐* โฑโโฑโฎ`)
 
let veloz = 
`๐ *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\n๐ *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '๐๐๐๐ก-๐๐ข๐ง', url: 'https://www.facebook.com/gianwalter28'}},
{index: 2, urlButton: {displayText: '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', url: 'https://www.instagram.com/gian_walter/'}},
{index: 3, quickReplyButton: {displayText: '๐๐ฉ๐ง๐ ๐ซ๐๐ฏ', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: '๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
