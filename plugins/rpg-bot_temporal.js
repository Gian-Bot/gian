let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
  if (!global.db.data.settings[conn.user.jid].temporal) throw `${ag}ππ πΎπππΌπΏππ ππΌ ππππππππππΏπ ππππΌ ππππΎπππ πΏπ πππππππΌπ ππ π½ππ πππππππΌππππππ πΌ ππππππ ππππππΌ πΓπ ππΌππΏπ π ππ ππ πππππ πΏππ π½ππ πππ *#on temporal* ππΌππΌ πΌπΎππππΌπ`
  
  if (!args[0]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace NΓΊmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN πͺ = 30 MINUTOS*`
let [_, code] = args[0].match(linkRegex) || [] 
if (!linkRegex.test(args[0])) throw `${fg}ππππΌπΎπ ππ ππΌπππΏπ.` //AquΓ­ 

    
  //if (!code) throw `${fg}*ENLACE INCORRECTO, VERIFIQUE QUE EL ENLACE SEA DE UN GRUPO DE WHATSAPP Y QUE NO ESTE CADUCADO*`
let user = db.data.users[m.sender]

  if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let img = 'https://i.imgur.com/8fK4h6F.jpg'
if (user.joincount < 1) throw `${ag}*Β‘YA NO TIENES TOKENS! πΉ*\n\n*COMPRA TOKENS PARA PODER INVITAR A BOT A TΓ GRUPO CON EL COMANDO ${usedPrefix}buy3 o ${usedPrefix}buyall3* *cantidad*`
 //if (user.joincount === 0 ) throw `${ag}*Β‘YA NO TIENES TOKENS! πΉ*\n\n*COMPRA TOKENS PARA PODER INVITAR A BOT A TΓ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`  
 if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y NΓΊmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN πͺ = 30 MINUTOS*`
 if (!linkRegex.test(args[0])) throw `${fg}ππππΌπΎπ ππ ππΌπππΏπ.` //AquΓ­ 
 if (isNaN(args[1])) throw `${mg}*SOLO INGRESE EL NΓMERO DE TOKEN(S)*`
 if (args[1] < 3) throw `${fg}*MΓXIMO 3 TOKEN(S) PARA PODER INVITAR A BOT*`
 if (args[1] > 3) throw `${fg}*MΓNIMO 3 TOKEN(S) PARA PODER INVITAR A BOT*` //Solo ingresarΓ‘ si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `${eg}πΉ *SE HA UNIDO BOT AL GRUPO!!!*`, m).then(async() => { 
  user.joincount -= args[1] 
 var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
 var now = new Date() * 1
//let res = await conn.groupAcceptInvite(code) 
//conn.reply(m.chat, `${eg}πΉ *SE HA UNIDO BOT AL GRUPO!!!*`, m).then(async() => {
 //var jumlahHari = 600000 * 1 // 10 minutos | Usuarios
// var now = new Date() * 1 
 
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.reply(m.chat, `β SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES β³ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENΓ*\n\nπͺ *ME SALDRΓ AUTOMΓTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) πΉ*\n\nβ *PUEDE USAR EL COMANDO TAMBIΓN EN GRUPO MIENTRAS ESTE YO*\n\nβ *SI QUIERE QUE ESTE POR MΓS TIEMPO AUMENTE EL NΓMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\nβ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA NO SE VA PODER*`, m)
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARΓ A REALIZAR DIFERENTES ACTIVIDADES π₯ AL PRIVADO O GRUPO Y TAMBIΓN TE VAS A DIVERTIR π CON SUS MULTIPLES FUNCIONES, DISFRUTA DEL BOT!!! πΉ*\n\nπ₯ *EL BOT FUE INVITADO POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarΓ‘ a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
}})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.joincount === 0 ) throw `${ag}*Β‘YA NO TIENES TOKENS! π₯*\n\n*COMPRA TOKENS PARA PODER INVITAR AL BOT A TΓ GRUPO CON EL COMANDO ${usedPrefix}buy3* *cantidad*`
  if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y NΓΊmero de Token(s)*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 3*\n\n*3 TOKEN πͺ = 30 MINUTOS*`
if (!linkRegex.test(args[0])) throw `${fg}ππππΌπΎπ ππ ππΌπππΏπ.` //AquΓ­ 

  let res = await conn.groupAcceptInvite(code) 
  conn.reply(m.chat, `${eg}πΉ *SE HA UNIDO GATABOT AL GRUPO!!!*`, m).then(async() => { //Si el Owner se une al Grupo no habrΓ‘ temporizador
let img = 'https://i.imgur.com/8fK4h6F.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `β SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES β³ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENΓ*\n\nπͺ *ME SALDRΓ AUTOMΓTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.joincount} TOKEN(S) π₯*\n\nβ *PUEDE USAR EL COMANDO TAMBIΓN EN GRUPO MIENTRAS ESTE YO*\n\nβ *SI QUIERE QUE ESTE POR MΓS TIEMPO AUMENTE EL NΓMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\nβ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA NO SE VA PODER*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARΓ A REALIZAR DIFERENTES ACTIVIDADES π₯ AL PRIVADO O GRUPO Y TAMBIΓN TE VAS A DIVERTIR π CON SUS MULTIPLES FUNCIONES, DISFRUTA DEL BOT!!! πΉ*\n\nπ₯ *El BOT FUE INVITADO POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarΓ‘ a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['Creador', `/creador`], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], m, res) })}
    
}

handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd'] ///^(temporal|tiempo)$/i
export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " *DΓ­a(s)* βοΈ\n" + hours + " *Hora(s)* β³\n" + minutes + " *Minuto(s)* β°\n" + sec + " *Segundo(s)* π\n";
    //return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
