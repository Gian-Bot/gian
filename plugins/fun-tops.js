import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgay') {
let vn = './media/gay2.mp3'
let top = `*πTOP 10 GAYS/LESBIANAS DEL GRUPOπ*
    
*_1.- π³οΈβπ ${user(a)}_* π³οΈβπ
*_2.- πͺ ${user(b)}_* πͺ
*_3.- πͺ ${user(c)}_* πͺ
*_4.- π³οΈβπ ${user(d)}_* π³οΈβπ
*_5.- πͺ ${user(e)}_* πͺ
*_6.- πͺ ${user(f)}_* πͺ
*_7.- π³οΈβπ ${user(g)}_* π³οΈβπ
*_8.- πͺ ${user(h)}_* πͺ
*_9.- πͺ ${user(i)}_* πͺ
*_10.- π³οΈβπ ${user(j)}_* π³οΈβπ`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {

//m.reply(conn.sendHydrated(m.chat, `*SON MUY GAYS!!* π`, wm, null, md, 'πππΌππ½ππ', null, null, [
//['ππ©π§π π«ππ― π»', `${usedPrefix + command}`],
//['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '/menu']
//], m))
   
//contextInfo: { 
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
    
if (command == 'toppros') {
let vn = './media/oasdf.mp3'
let top = `*π₯ TOP 10 PROS EN LEFTπͺ*
    
*_1.- π₯ ${user(a)}_* πͺ
*_2.- π₯ ${user(b)}_* πͺ
*_3.- π₯ ${user(c)}_* πͺ
*_4.- π₯ ${user(d)}_* πͺ
*_5.- π₯ ${user(e)}_* πͺ
*_6.- π₯ ${user(f)}_* πͺ
*_7.- π₯ ${user(g)}_* πͺ
*_8.- π₯ ${user(h)}_* πͺ
*_9.- π₯ ${user(i)}_* πͺ
*_10.- π₯ ${user(j)}_* πͺ`
m.reply(top, null, { mentions: conn.parseMention(top) })
//m.reply(top, null, {
//conn.sendHydrated(m.chat, top, wm, null, md, 'πππΌππ½ππ', null, null, [
//['ππ©π§π π«ππ― π»', `${usedPrefix + command}`],
//['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '/menu']
//], m, null, {
//contextInfo: {
//mentionedJid: [a, b, c, d, e, f, g, h, i, j]
//}})
conn.sendFile(m.chat, vn, 'asdf.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
   
if (command == 'topwapo') {
let top = `*_πTOP 10 WAPOSπ_*
    
*_1.- π ${user(a)}_* π
*_2.- π ${user(b)}_* π
*_3.- π ${user(c)}_* π
*_4.- π ${user(d)}_* π
*_5.- π ${user(e)}_* π
*_6.- π ${user(f)}_* π
*_7.- π ${user(g)}_* π
*_8.- π ${user(h)}_* π
*_9.- π ${user(i)}_* π
*_10.- π ${user(j)}_* π`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topwapo') {
let top = `*_πTOP 10 WAPOSπ_*
    
*_1.- π ${user(a)}_* π
*_2.- π ${user(b)}_* π
*_3.- π ${user(c)}_* π
*_4.- π ${user(d)}_* π
*_5.- π ${user(e)}_* π
*_6.- π ${user(f)}_* π
*_7.- π ${user(g)}_* π
*_8.- π ${user(h)}_* π
*_9.- π ${user(i)}_* π
*_10.- π ${user(j)}_* π`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topcacanero') {
let top = `*_π© TOP 10 CACANEROSπ©_* 
    
*_1.- π© ${user(a)} π©_*
*_2.- π© ${user(b)} π©_*
*_3.- π© ${user(c)} π©_*
*_4.- π© ${user(d)} π©_*
*_5.- π© ${user(e)} π©_*
*_6.- >π© ${user(f)} >π©_*
*_7.- π© ${user(g)} π©_*
*_8.- π© ${user(h)} π©_*
*_9.- π© ${user(i)} π©_*
*_10.- π© ${user(j)} π©_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topragero') {
let top = `*_Uwu TOP 10 LA GRASA Uwu_* 
    
*_1.- π© ${user(a)} π©_*
*_2.- π© ${user(b)} π©_*
*_3.- π© ${user(c)} π©_*
*_4.- π© ${user(d)} π©_*
*_5.- π© ${user(e)} π©_*
*_6.- >π© ${user(f)} >π©_*
*_7.- π© ${user(g)} π©_*
*_8.- π© ${user(h)} _*
*_9.- π© ${user(i)} π©_*
*_10.- π© ${user(j)} π©_*`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppfracasados') {
let top = `*_πTOP 10 FRACASADOSπ_* 
    
*_1.- π€ ${user(a)}_* π₯
*_2.- π₯ ${user(b)}_* π₯
*_3.- π₯ ${user(c)}_* π₯
*_4.- π₯ ${user(d)}_* π₯
*_5.- π₯ ${user(e)}_* π₯
*_6.- π₯ ${user(f)}_* π₯
*_7.- π₯ ${user(g)}_* π₯
*_8.- π₯ ${user(h)}_* π₯
*_9.- π₯ ${user(i)}_* π₯
*_10.- π₯ ${user(j)}_* π₯`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfracasados') {
let top = `*_πTOP 10 FRACASADOSπ_* 
    
*_1.- π₯ ${user(a)}_* π€’
*_2.- π₯ ${user(b)}_* π€’
*_3.- π€’ ${user(c)}_* π₯
*_4.- π€’ ${user(d)}_* π€’
*_5.- π₯ ${user(e)}_* π₯
*_6.- π₯ ${user(f)}_* π€’
*_7.- π€’ ${user(g)}_* π₯
*_8.- π₯ ${user(h)}_* π₯
*_9.- π€’ ${user(i)}_* π₯
*_10.- π€’ ${user(j)}_* π€’`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppensla') {
let top = `*_π±TOP 10 SHIPOSTERS DEL GRUPOπ±_* 
    
*_1.- π ${user(a)}_* π
*_2.- π€ ${user(b)}_* π€
*_3.- π₯Ά ${user(c)}_* π₯Ά
*_4.- π€ ${user(d)}_* π€
*_5.- π₯΅ ${user(e)}_* π₯΅
*_6.- π€ ${user(f)}_* π€
*_7.- π ${user(g)}_* π
*_8.- π¨ ${user(h)}_* π¨
*_9.- π ${user(i)}_* π
*_10.- π€  ${user(j)}_* π€ `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topshipossja') {
let top = `*_π±TOP 10 SHIPOSTERS DEL GRUPOπ±_* 
    
*_1.- π ${user(a)}_* π
*_2.- π€ ${user(b)}_* π€
*_3.- π₯Ά ${user(c)}_* π₯Ά
*_4.- π€ ${user(d)}_* π€
*_5.- π₯΅ ${user(e)}_* π₯΅
*_6.- π€ ${user(f)}_* π€
*_7.- π ${user(g)}_* π
*_8.- π¨ ${user(h)}_* π¨
*_9.- π ${user(i)}_* π
*_10.- π€  ${user(j)}_* π€ `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppajeros') {
let top = `*_πTOP L@S MAS PAJEROS/AS DEL GRUPOπ¦_* 
    
*_1.- π₯΅ ${user(a)}_* π¦
*_2.- π₯΅ ${user(b)}_* π¦
*_3.- π₯΅ ${user(c)}_* π¦
*_4.- π₯΅ ${user(d)}_* π¦
*_5.- π₯΅ ${user(e)}_* π¦
*_6.- π₯΅ ${user(f)}_* π¦
*_7.- π₯΅ ${user(g)}_* π¦
*_8.- π₯΅ ${user(h)}_* π¦
*_9.- π₯΅ ${user(i)}_* π¦
*_10.- π₯΅ ${user(j)}_* π¦`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toppajer@s') {
let top = `*_πTOP L@S MAS PAJEROS/AS DEL GRUPOπ¦_* 
    
*_1.- π₯΅ ${user(a)}_* π¦
*_2.- π₯΅ ${user(b)}_* π¦
*_3.- π₯΅ ${user(c)}_* π¦
*_4.- π₯΅ ${user(d)}_* π¦
*_5.- π₯΅ ${user(e)}_* π¦
*_6.- π₯΅ ${user(f)}_* π¦
*_7.- π₯΅ ${user(g)}_* π¦
*_8.- π₯΅ ${user(h)}_* π¦
*_9.- π₯΅ ${user(i)}_* π¦
*_10.- π₯΅ ${user(j)}_* π¦`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplindduaks') {
let top = `*_π³TOP L@S MAS LIND@S Y SEXIS DEL GRUPOπ³_*
    
*_1.- β¨ ${user(a)}_* β¨
*_2.- β¨ ${user(b)}_* β¨
*_3.- β¨ ${user(c)}_* β¨
*_4.- β¨ ${user(d)}_* β¨
*_5.- β¨ ${user(e)}_* β¨
*_6.- β¨ ${user(f)}_* β¨
*_7.- β¨ ${user(g)}_* β¨
*_8.- β¨ ${user(h)}_* β¨
*_9.- β¨ ${user(i)}_* β¨
*_10.- β¨ ${user(j)}_* β¨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toplindskaie') {
let top = `*_π³TOP L@S MAS LIND@S Y SEXIS DEL GRUPOπ³_*
    
*_1.- β¨ ${user(a)}_* β¨
*_2.- β¨ ${user(b)}_* β¨
*_3.- β¨ ${user(c)}_* β¨
*_4.- β¨ ${user(d)}_* β¨
*_5.- β¨ ${user(e)}_* β¨
*_6.- β¨ ${user(f)}_* β¨
*_7.- β¨ ${user(g)}_* β¨
*_8.- β¨ ${user(h)}_* β¨
*_9.- β¨ ${user(i)}_* β¨
*_10.- β¨ ${user(j)}_* β¨`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topputos') {
let top = `*_πTOP L@S MAS PUT@S DEL GRUPO SONπ₯_* 
    
*_1.- π ${user(a)}_* π
*_2.- π ${user(b)}_* π
*_3.- π ${user(c)}_* π
*_4.- π ${user(d)}_* π
*_5.- π ${user(e)}_* π
*_6.- π ${user(f)}_* π
*_7.- π ${user(g)}_* π
*_8.- π ${user(h)}_* π
*_9.- π ${user(i)}_* π
*_10.- π ${user(j)}_* π`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topput@s') {
let top = `*_πTOP L@S MAS PUT@S DEL GRUPO SONπ₯_* 
    
*_1.- π ${user(a)}_* π
*_2.- π ${user(b)}_* π
*_3.- π ${user(c)}_* π
*_4.- π ${user(d)}_* π
*_5.- π ${user(e)}_* π
*_6.- π ${user(f)}_* π
*_7.- π ${user(g)}_* π
*_8.- π ${user(h)}_* π
*_9.- π ${user(i)}_* π
*_10.- π ${user(j)}_* π`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamosos') {
let top = `*_πTOP PERSONAS FAMOSAS EN EL GRUPOπ_* 
    
*_1.- π« ${user(a)}_* π«
*_2.- π₯ ${user(b)}_* π₯
*_3.- π€© ${user(c)}_* π€©
*_4.- π« ${user(d)}_* π«
*_5.- π₯ ${user(e)}_* π₯
*_6.- π€© ${user(f)}_* π€©
*_7.- π« ${user(g)}_* π«
*_8.- π₯ ${user(h)}_* π₯
*_9.- π€© ${user(i)}_* π€©
*_10.- π« ${user(j)}_* π«`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamos@s') {
let top = `*_πTOP PERSONAS FAMOSAS EN EL GRUPOπ_* 
    
*_1.- π« ${user(a)}_* π«
*_2.- π₯ ${user(b)}_* π₯
*_3.- π€© ${user(c)}_* π€©
*_4.- π« ${user(d)}_* π«
*_5.- π₯ ${user(e)}_* π₯
*_6.- π€© ${user(f)}_* π€©
*_7.- π« ${user(g)}_* π«
*_8.- π₯ ${user(h)}_* π₯
*_9.- π€© ${user(i)}_* π€©
*_10.- π« ${user(j)}_* π«`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topparejas') {
let top = `*_π Las 5 maravillosas parejas del grupo π_*
    
*_1.- ${user(a)} π ${user(b)}_* 
Que hermosa pareja π, me invitan a su Boda π

*_2.- ${user(c)} π ${user(d)}_*  
πΉ Ustedes se merecen lo mejor del mundo π

*_3.- ${user(e)} π ${user(f)}_* 
Tan enamorados π, para cuando la familia π₯°

*_4.- ${user(g)} π ${user(h)}_* 
π Decreto que ustedes son la pareja del AΓ±o π 

*_5.- ${user(i)} π ${user(j)}_* 
Genial! π, estΓ‘n de Luna de miel π₯΅β¨β€οΈβπ₯`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'top5parejas') {
let top = `*_π Las 5 maravillosas parejas del grupo π_*
    
*_1.- ${user(a)} π ${user(b)}_* 
Que hermosa pareja π, me invitan a su Boda π

*_2.- ${user(c)} π ${user(d)}_*  
πΉ Ustedes se merecen lo mejor del mundo π

*_3.- ${user(e)} π ${user(f)}_* 
Tan enamorados π, para cuando la familia π₯°

*_4.- ${user(g)} π ${user(h)}_* 
π Decreto que ustedes son la pareja del AΓ±o π 

*_5.- ${user(i)} π ${user(j)}_* 
Genial! π, estΓ‘n de Luna de miel π₯΅β¨β€οΈβπ₯`
m.reply(top, null, { mentions: conn.parseMention(top) })}
  
}
handler.help = handler.command = ['topgay', 'toppros', 'topwapos', 'topwapo', 'topcacanero', 'topcaca', 'topragero', 'topfracasados', 'topshiposters', 'topshipost', 'toppajeros', 'toppajer@s', 'toplindos', 'toplind@s', 'topputos', 'topput@s', 'topfamosos', 'topfamos@s', 'topparejas', 'top5parejas' ]
handler.tags = ['games']
handler.group = true
export default handler  
