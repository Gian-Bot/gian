export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  ${eg}𝘿𝙀𝙅𝘼𝙎𝙏𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊 *(𝘼𝙁𝙆)*${user.afkReason ? ' 𝙀𝙇 𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 𝙀𝙍𝘼: ' + user.afkReason : ''}
  
𝙏𝙄𝙀𝙈𝙋𝙊 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊: *${(new Date - user.afk).toTimeString()}*`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`${ag}𝙉𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀𝙉 𝘼𝙇 𝘽𝘼𝘽𝙊𝙎𝙊, 𝙏𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊!!     
${reason ? '𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙇𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 *(𝘼𝙁𝙆):* ' + reason : '𝙈𝙊𝙏𝙄𝙑𝙊 𝘿𝙀 𝙇𝘼 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 *(𝘼𝙁𝙆):* 𝙀𝙎𝙏𝙀 𝘽𝙐𝙍𝙍𝙊 𝙅𝘼𝙅𝘼, 𝙉𝙊 𝙋𝙐𝙎𝙊 𝙇𝘼 𝙍𝘼𝙕𝙊𝙉 𝘿𝙀 𝙎𝙐 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿 '}
𝙏𝙄𝙀𝙈𝙋𝙊 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊: *${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
