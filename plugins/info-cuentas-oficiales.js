let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
π π½ππππππππΏπ(πΌ) πΌ ππΌπ πΎπππππΌπ ππππΎππΌπππ
βββββββββββββββββ
β *FB*
*${md}*
βββββββββββββββββ
β *INSTAGRAM*
*${ig}*
βββββββββββββββββ
*SON TODAS MIS REDES :'V JAJAJ*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://www.facebook.com/gianwalter28', 'ππππ‘ππ’π§', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ π°', '.grupos'],
['πΎπ§ππππ€π§π πͺ', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|giang|cuentasgb|cuentagb|accounts|gianccounts|account|iggian|cuentasdegian|cuentasdegianbot|cuentagianbot|cuentasgianbot$/i
handler.exp = 35
export default handler
