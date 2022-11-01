const roles = {
    '*CHATO V* 🥑': 0,
     '*CHATO IV* 🥑': 1,
      '*CHATO III* 🥑': 2,
       '*CHATO II* 🥑': 3,
        '*CHATO I* 🥑': 4,
    '*APRENDIS V* 🔥': 5,
     '*APRENDIS IV* 🔥': 6,
      '*APRENDIS III* 🔥': 7,
       '*APRENDIS II* 🔥': 8,
       '*APRENDIS I* 🔥': 9,
    '*HEROICO V* 🪓': 10,
     '*HEROICO IV* 🪓': 11,
      '*HEROICO III* 🪓': 12,
       '*HEROICO II* 🪓': 13,
        '*HEROICO I* 🪓': 14,
    '*MAESTRO(A) V* ⚒️': 15,
     '*MAESTRO(A) IV* ⚒️': 16,
      '*MAESTRO(A) III* ⚒️': 17,
       '*MAESTRO(A) II* ⚒️': 18,
        '*MAESTRO(A) I* ⚒️': 19,
    '*BRONCE  V* ✊': 20,
     '*BRONCE  IV* ✊': 21,
      '*BRONCE  III* ✊': 22,
       '*BRONCE  II* ✊': 23,
        '*BRONCE  I* ✊': 24,
    '*PLATA V* 🔮': 25,
     '*PLATA IV* 🔮': 26,
      '*PLATA III* 🔮': 27,
       '*PLATA II* 🔮': 28,
        '*PLATA I* 🔮': 29,
    '*ORO V* 🏅': 30,
     '*ORO IV* 🏅': 31,
      '*ORO III* 🏅': 32,
       '*ORO II* 🏅': 33,
        '*ORO I* 🏅': 34,
    '*DIAMANTE V* 💎': 35,
     '*DIAMANTE IV* 💎': 36,
      '*DIAMANTE III* 💎': 37,
       '*DIAMANTE II* 💎': 38,
        '*DIAMANTE I* 💎': 39,
    '*PRO V* 👹': 40,
     '*PRO IV* 👹': 41,
      '*PRO III* 👹': 42,
       '*PRO II* 👹': 43,
        '*PRO I* 👹': 44,
    '*SUPER PRO V* 🎩': 45,
     '*SUPER PRO IV* 🎩': 46,
      '*SUPER PRO III* 🎩': 47,
       '*SUPER PRO II* 🎩': 48,
        '*SUPER PRO I* 🎩': 49,
    '*LEGENDARIO(A) V* 🛡️': 50,
     '*LEGENDARIO(A) IV* 🛡️': 51,
      '*LEGENDARIO(A) III* 🛡️': 52,
       '*LEGENDARIO(A) II* 🛡️': 53,
        '*LEGENDARIO(A) I* 🛡️': 54,
    '*LEYENDA V* 🏆': 55,
     '*LEYENDA IV* 🏆': 56,
      '*LEYENDA III* 🏆': 57,
       '*LEYENDA II* 🏆': 58,
       '*LEYENDA I* 🏆': 59,
    '*PINGA DE HIERRO V* ☄️': 60,
     '*PINGA DE HIERRO IV* ☄️': 61,
      '*PINGA DE HIERRO III* ☄️': 62,
       '*PINGA DE HIERRO II* ☄️': 63,
        '*PINGA DE HIERRO I* ☄️': 64,
    '*CHOLO POWER V* ⚜️🔱': 65,
     '*CHOLO POWER IV* ⚜️🔱': 66,
      '*CHOLO POWER III* ⚜️🔱': 67,
       '*CHOLO POWER II* ⚜️🔱': 68,
        '*CHOLO POWER I* ⚜️🔱': 69,
    '👑 *LEDER V* 🏁': 70,
     '👑 *LEDER IV* 🏁': 75,
      '👑 *LEDER III* 🏁': 80,
       '👑 *LEDER II* 🏁': 85,
        '👑 *LEDER I* 🏁': 90,
    '👑 *∞ CACHERAZO V* 💎🏁': 100,
     '👑 *∞ CACHERAZO IV* 💎🏁': 140,
    '👑 *∞ CACHERAZO III* 💎🏁': 180,
    '👑 *∞ CACHERAZO II* 💎🏁': 250,
    '👑 *∞ CACHERAZOI* 💎🏁': 300
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}

/*let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*CHATO III* 🪤'
        : ((user.level >= 3) && (user.level <= 6)) ? '*CHATO II* 🪤'
            : ((user.level >= 6) && (user.level <= 9)) ? '*CHATO I* 🪤'
                : ((user.level >= 9) && (user.level <= 12)) ? '*APRENDIS III* 🪚'
                    : ((user.level >= 12) && (user.level <= 15)) ? '*APRENDIS II* 🪚'
                        : ((user.level >= 15) && (user.level <= 18)) ? '*APRENDIS I* 🪚'
                            : ((user.level >= 18) && (user.level <= 21)) ? '*HEROICO III* 🪓'
                                : ((user.level >= 21) && (user.level <= 24)) ? '*HEROICO II* 🪓'
                                    : ((user.level >= 24) && (user.level <= 27)) ? '*HEROICO I* 🪓'
                                        : ((user.level >= 27) && (user.level <= 30)) ? '*MAESTRO(A) III* ⚒️'
                                            : ((user.level >= 30) && (user.level <= 33)) ? '*MAESTRO(A) II* ⚒️'
                                                : ((user.level >= 33) && (user.level <= 36)) ? '*MAESTRO(A) I* ⚒️'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? '*BRONCE  III* 🦾'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? '*BRONCE  II* 🦾'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? '*BRONCE  I* 🦾'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? '*PLATA III* 🔮'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? '*PLATA II* 🔮'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? '*PLATA I* 🔮'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? '*ORO III* 🏅'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? '*ORO II* 🏅'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? '*ORO I* 🏅'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? '*DIAMANTE III* 💎'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? '*DIAMANTE II* 💎'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? '*DIAMANTE I* 💎'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? '*PRO III* 👹'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? '*PRO II* 👹'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? '*PRO I* 👹'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? '*SUPER PRO III* 🎩'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? '*SUPER PRO II* 🎩'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? '*SUPER PRO I* 🎩'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? '*LEGENDARIO(A) III* 🛡️'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? '*LEGENDARIO(A) II* 🛡️'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? '*LEGENDARIO(A) I* 🛡️'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? '*LEYENDA III* 🏆'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? '*LEYENDA II* 🏆'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? '*LEYENDA I* 🏆'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? '*PINGA DE HIERRO III* ☄️'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? '*PINGA DE HIERRO II* ☄️'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? '*PINGA DE HIERRO I* ☄️'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? '*CHOLO POWER III* ⚜️🔱'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? '*CHOLO POWER III* ⚜️🔱'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 700)) ? '*CHOLO POWER III* ⚜️🔱'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? '👑 *LEDER* 🏁'
                                                                                                                                                                                : '👑 *∞ CACHERAZO* 💎🏁'


    user.role = role
    return true
}

export default handler */
