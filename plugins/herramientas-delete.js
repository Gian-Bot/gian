let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw `${ag}ππππ πππππΎππΌπ ππ?πΌπΎπΌππ πππππΜ πππ πππππΌππ πΌππππΌπ!, πππ πππΏπ ππ ππ πππππ½ππ πππππππΌπ πππ πππππΌππ`
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^eliminar|del(ete)?$/i
export default handler
