let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}
let pesan = args.join` `
let oi = `*α¦ πππππΌππ:* ${pesan}`
let teks = `β­βγ *πππΏππππΏπ πΌπππΏπΌ* γββ¬£\n\n${oi}\n\n`
for (let mem of participants) {
teks += `ββ₯ @${mem.id.split('@')[0]}\n`}
teks += `β°ββββββ[ *πΉ ${vs}* ]βββββββ¬£`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(pedirayuda)$/i
handler.group = true
export default handler
