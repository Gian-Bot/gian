let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
๐ฅ ๐ฝ๐๐๐๐๐๐๐๐ฟ๐(๐ผ) ๐ผ๐ ๐๐๐๐๐ ๐๐๐๐พ๐๐ผ๐
โโโโโโโโโโโโโโโโโ
๐ข๐ฒ ๐บ๐ฎ๐ป๐ผ, ๐ฒ๐๐๐ฒ ๐ด๐ฟ๐๐ฝ๐ผ ๐ผ๐ณ๐ถ๐ฐ๐ถ๐ฎ๐น ๐๐ผ๐น๐ผ ๐ฒ๐ ๐ฝ๐ฎ๐ฟ๐ฎ ๐ด๐ฒ๐ป๐๐ฒ ๐พ๐๐ฒ ๐ท๐๐ฒ๐ด๐ฎ ๐๐ฒ๐ณ๐ 4 ๐๐ฒ๐ฎ๐ฑ 2, ๐ฆ๐ถ ๐ป๐ผ ๐น๐ผ ๐ท๐๐ฒ๐ด๐ฎ๐, ๐ป๐ผ ๐๐ฒ ๐๐ป๐ฎ๐ ๐ ๐๐ฎ, ๐ฎ๐ต๐ผ๐ฟ๐ฟ๐ฎ๐บ๐ฒ ๐ฒ๐น ๐๐ฟ๐ฎ๐ฏ๐ฎ๐ท๐ผ ๐ฑ๐ฒ ๐ฒ๐น๐ถ๐บ๐ถ๐ป๐ฎ๐ฟ๐๐ฒ.
๐๐ป ๐ฐ๐ฎ๐๐ผ ๐ฑ๐ฒ ๐พ๐๐ฒ ๐ท๐๐ฒ๐ด๐๐ฒ๐ ๐๐ฒ๐ณ๐ 4 ๐๐ฒ๐ฎ๐ฑ 2, ๐ฒ๐ป๐๐ฟ๐ฎ ๐ ๐ฑ๐ฒ๐ท๐ฎ ๐๐ ๐๐ ๐ฝ๐ฎ๐ฟ๐ฎ ๐ฎ๐ด๐ฟ๐ฒ๐ด๐ฎ๐ฟ๐๐ฒ, ๐๐ถ ๐ฒ๐ป๐๐ฟ๐ฎ๐ ๐ ๐ป๐ผ ๐ฑ๐ฒ๐ท๐ฎ๐ ๐ป๐ฎ๐ฑ๐ฎ, ๐๐ฒ ๐๐ฒ๐ป๐ฑ๐ฟ๐ฒฬ ๐พ๐๐ฒ ๐ฒ๐น๐ถ๐บ๐ถ๐ป๐ฎ๐ฟ. ๐ฆ๐ผ๐ฟ๐ฟ๐ . ๐๐ฅ
โโโโโโโโโโโโโโโโโ
๐น *Versiรณn de ${gt}*
โฅ ${vs}
โโโโโโโโโโโโโโโโโ
โ ๐๐๐๐๐ ๐๐๐๐พ๐๐ผ๐ ${gt}
โโโโโโโโโโโโโโโโโ
๐น *https://chat.whatsapp.com/BTkxfWHupzOCwpOuXmEESk*\n
โโโโโโโโโโโโโโโโโ
*Por favor, no ingresar con nรบmeros de Bots, y mantener el respeto.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://www.facebook.com/gianwalter28', '๐๐๐๐ก-๐๐ข๐ง', null, null, [
['๐พ๐ช๐๐ฃ๐ฉ๐๐จ ๐๐๐๐๐๐๐ก๐๐จ โ', '.cuentasgb'],
['๐ ๐ฟ๐ค๐ฃ๐๐ง', '.donar'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ ๐น๏ธ', '/menu']
], m,)}

handler.command = /^linkgb|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
