import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {

if (command == 'consejo') {
let letra = 'https://mysuenos.com/wp-content/uploads/2019/10/trebol.jpg'
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
let texto = `
*β­ββγ»π₯οΈγ»ββββγ»π₯οΈγ»βββ¬£*

*α¦ ${frase1}*

*β°ββγ»π₯οΈγ»ββββγ»π₯γ»βββ¬£*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['π ππͺππ«π€ πΎπ€π£π¨πππ€', `${usedPrefix + command}`],
['π ππ£ππ‘ππ¨π π«ππ§π¨ππ€π£', '.consejo2'],
['πΉ ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ', '#menu']
], m,)}
  
if (command == 'consejo2') {
let letra = 'https://mysuenos.com/wp-content/uploads/2019/10/trebol.jpg'
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'en' })
let texto = `
*β­ββγ»π₯οΈγ»ββββγ»π₯οΈγ»βββ¬£*

*α¦ ${frase1}*

*β°ββγ»π₯οΈγ»ββββγ»π₯γ»βββ¬£*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['π ππͺππ«π€ πΎπ€π£π¨πππ€', `${usedPrefix + command}`],
['π πππ§π¨ππ€π£ ππ¨π₯ππ£π€π‘', '.consejo'],
['πΉ ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ', '#menu']
], m,)}
  

if (command == 'fraseromantica') {
let letra = 'https://www.tuexpertoapps.com/wp-content/uploads/2019/02/san-valentin-apps-01.jpg.webp'
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
let texto = `
*β­ββγ»β¨γ»ββββγ»β¨γ»βββ¬£*

*α¦ ${frase1}*

*β°ββγ»β¨γ»ββββγ»β¨γ»βββ¬£*`
//m.reply(`
//*β­ββββββββββ¬£*
//*α¦ ${frase1}*
//*β°ββββββββββ¬£*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['πΈ ππͺππ«π ππ§ππ¨π', `${usedPrefix + command}`],
['π ππ£ππ‘ππ¨π π«ππ§π¨ππ€π£', '.fraseromantica2'],
['β‘ ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ', '#menu']
], m,)}
  
if (command == 'fraseromantica2') {
let letra = 'https://www.tuexpertoapps.com/wp-content/uploads/2019/02/san-valentin-apps-01.jpg.webp'
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'en' })
let texto = `
*β­βββγ»β¨γ»βββββγ»β¨γ»ββββ¬£*

*α¦ ${frase1}*

*β°βββγ»β¨γ»βββββγ»β¨γ»ββββ¬£*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['πΈ ππͺππ«π ππ§ππ¨π', `${usedPrefix + command}`],
['π πππ§π¨ππ€π£ ππ¨π₯ππ£π€π‘', '.fraseromantica'],
['β‘ ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ', '#menu']
], m,)}
  

if (command == 'historia') {
let letra = 'https://cdn.pixabay.com/photo/2015/07/23/19/12/book-857377_960_720.jpg'
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
let texto = `
π *TΓ­tulo: ${titletime}*
π *Autor(a): ${author_name}*
βββββββββββββ
π *${storytime}*`

//conn.reply(m.chat, `
//π *TΓ­tulo: ${titletime}*
//π *Autor(a): ${author_name}*
//βββββββββββββ
//π *${storytime}*`, m)}
conn.sendHydrated(m.chat, texto, wm, letra, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['π ππͺππ«π πππ¨π©π€π§ππ', `${usedPrefix + command}`],
['π ππ£ππ‘ππ¨π π«ππ§π¨ππ€π£', '.historia2'],
['β‘ ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ', '#menu']
], m,)}
  
if (command == 'historia2') {
let letra = 'https://cdn.pixabay.com/photo/2015/07/23/19/12/book-857377_960_720.jpg'
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'en' })
let titletime = await translate(`${title}`, { tld, to: 'en' })
let texto = `
π *TΓ­tulo: ${titletime}*
π *Autor(a): ${author_name}*
βββββββββββββ
π *${storytime}*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://gwww.facebook.com/gianwalter28', 'ππππ‘ππ’π§-ππ', null, null, [
['π ππͺππ«π πππ¨π©π€π§ππ', `${usedPrefix + command}`],
['π πππ§π¨ππ€π£ ππ¨π₯ππ£π€π‘', '.historia'],
['β‘ ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ', '#menu']
], m,)}
  
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'consejo2', 'fraseromantica', 'fraseromantica2', 'historia', 'historia2']
export default handler
