let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππππππΌ ππΌππΌ πππ πππππππΏππΏπΌ\nπππππππ\n*${usedPrefix + command} Algun dia anuel me cacharaπ?*`   
let pre = `β­βγ ππππππππΌ γββ¬£  
βοΈ ππππππππΌ
πΉ *${text}*
βββββββββββββββ
β πππππππππΌ  
π *${['Si','Tal vez sΓ­ mano','Tal vez no mi loco','De ley p gordo','Creo que no:( GORDO!','Probablemente no','De ley pe mano','Toy asao mano, no puedo responderte','No','Imposible','Depende mano','Creo que si pero es no','Creo que no','Tas cagao mano','Sigue soΓ±ando mano','Preguntas webadas','Y si mejor me chupas la pinga?','Aveces hay que decir, "Ya fue".'].getRandom()}*
β°βββββγ πΉ *${vs}* γβββββ¬£`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'πππΌππ½ππ', null, null, [
['ππ©π§π π«ππ― πͺ', `${usedPrefix + command} ${text}`],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ πΉοΈ', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
