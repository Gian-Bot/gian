let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}๐ *๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐๐๐ ๐๐ ๐๐๐๐ผ๐พ๐*\n๐น *Ingrese el enlace de un grupo.*\n\n*๐๐๐๐๐๐๐*\n*#unete ${nn}*\n\n*#join ${nnn}*`

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*๐๐๐ผ๐-๐ฝ๐๐ ๐๐ ๐๐ผ ๐๐๐๐ฟ๐ ๐ผ๐ ๐๐๐๐๐!!*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}โญโโโขโโโโโโโโโโโโโโโโขโโโฎ\nโ ๐ง *๐๐๐๐๐พ๐๐๐๐ฟ ๐๐ผ๐๐ผ ๐๐ ๐๐๐๐๐* ๐ง     \nโฐโโโขโโโโโโโโโโโโโโโโขโโโฏ\n\n*๐ค ๐๐๐๐๐พ๐๐๐ผ๐๐๐*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*๐ฎ ๐๐๐๐ผ๐พ๐ ๐ฟ๐๐ ๐๐๐๐๐*\n ' + link, jid)

m.reply(`${ag}*โ Su enlace se enviรณ a Mรญ Propietario.*\nโโโโโโโโโโโโโโโโโ\nโ ๏ธ *Su Grupo serรก Evaluado y Quedarรก a decisiรณn de Mรญ Propietario(a) si ${gt} se une o no al Grupo.*\nโโโโโโโโโโโโโโโโโ\nโ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*1๏ธโฃ El Bot estรก Saturado.*\nโโโโโโโโโโโโโโโโโ\n2๏ธโฃ *El Bot fue eliminado del Grupo.*\nโโโโโโโโโโโโโโโโโ\n3๏ธโฃ *El Grupo no cumple con las Normativas de ${gt}*\nโโโโโโโโโโโโโโโโโ\n4๏ธโฃ *El enlace del grupo se restableciรณ.*\nโโโโโโโโโโโโโโโโโ\n5๏ธโฃ *No se agrega a Grupos segรบn Mi Propietario.*\nโโโโโโโโโโโโโโโโโ\n๐ *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.exp = 50
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
