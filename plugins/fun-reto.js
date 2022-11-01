let handler  = async (m, { conn, usedPrefix, command }) => {
//conn.reply(m.chat,`*┌────「 RETO 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 Mystic 」─*`, m)
conn.sendHydrated(m.chat, `╭━━━━━[ 𝙍𝙀𝙏𝙊 😏 ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, md, '𝙂𝙄𝘼𝙉𝘽𝙊𝙏', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 💪', `${usedPrefix}reto`],
['𝙏𝙤𝙥𝙨 | 𝙍𝙖𝙣𝙠𝙞𝙣𝙜 🏆', `${usedPrefix}top`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 👹️', `${usedPrefix}menu`]
], m,)}

handler.help = ['reto']
handler.tags = ['fun']
handler.command = /^reto/i
handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"Dile a tus amigos que te gusta la pinga y mandame una captura de lo que te haya dicho",
"Graba un audio gimiendo por 6 segundos",
"Escribe el nombre de tu crush",
"Debes de poner el nombre de mi creador en tu estado de WhatsApp, sin dar contexto",
"Enviame una fotografia de tu poto👽",
"Debes de dibujar en alguna parte de tu cuerpo el nombre de algun integrante del grupo, luego realiza una foto y enviala",
"Hazte una foto dandole un beso a tu reflejo del espejo",
 "Mandame una fotografia en ropa interior",
"Escribe en tu estado de WhatsApp que te gusta comer testiculos de burro",
"Debes de poner la fotografia de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 3 dias 💪",
"Tienes que mandar un audio cantando la cancion: Pluma Pluma Gay",
"Envia un mensaje a tu ex y dile todavia no la olvidas", "Envia un audio diciendo que eres bajito en left", 
"Dile a tu crush para cachar en el kinder", "Envia un audio diciendo que el admi te da anal(mencionar a cualquier admi)", 
"Envia una foto en la que salgas tu sin taparte la cara ni nada", "Envia un video perreando a tu perro", 
"Invita a personas que no conoces a tomarse una selfi contigo y luego envialo al grupo", 
"Elija algunos números aleatorios de sus contactos y enviale un mensaje de texto con el mensaje 'Estoy embarazad@'.", 
"Agarra un plumon y dibuja un pene en tu barriga y manda foto(dibujar un pene venoso y cabezon)", 
"Tome un numero aleatorio de sus contactos, llamelo y dile 'te amo' ", 
"Compra un pepino y metetelo al culo (puede usar una zanahoria) ", 
" Meta su webo en el pico de la botella", 
" Forma un corazon en tu mano con tu lechita", 
" Dibuja un pene en una hoja de cuaderno y escriba, lo que me como(mandar foto al grupo)", 
"Menciona a las personas con quien harias un trio", 
" Manda un audio aplaudiendo y diciendo: 'yes yes yes, Oh my god(mencionando a un admi)", 
" Manda un audio gritando(Jorge cachame).", 
" Manda un audio gritando(Gian cachame)", 
" Manda un audio gritando(adriano cachame)", 
" Manda un audio gritando(valentino cachame) ", 
" Manda un audio gritando(Juan cachame) ", 
" Arranca el pelo de tu propia pierna 3 veces!", 
" Escribe a tu mami y dile que te iras de la casa a vivir con el amor de tu vida que tiene 5 años", 
" Escribe a algun contacto y dile que vendes/intercambias CP ", 
" Dibuja un pene en tu cachete cerca a la boca y manda foto al grupo", 
" Toma leche dejando un poco en los labios y di: que rica leche", 
" Dile a tu prima que la amas ", 
"Pregunta a cualquiera de tus padres si puedes usar su cama para cachar con tu perro' ", 
"Pregunta a cualquiera de tus padres si puedes usar su cama para jalarte la pinga.", 
" Dile a tu papi por mensaje que te jalaste la pinga imaginindote a el y a tu mamá en pleno cache ", 
" Metele dedo a tu perro/gato(mandar foto)", 
" Pon en tu estado: 'Me canse de ser peruano, me voy a suicidar.", 
" Grita: saquenme de (Nacionalidad)", 
"Mete medio huevo crudo a tu boca y escribe que rico (mandar foto)", 
"manda audio diciendo: 'me trago los instans de los chargers mmm'.", 
"Anda al kinder y saca plan a una niñita.", 
"Del 7 al 10, cuanto te pones de ser gay", 
"Manda foto de tu cara👽", 
"Mandale un mensaje a tu mamá diciendole que dejaste semen en el baño, que por favor lo limpie "
] 
