//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ *منشن شخص ما*\n\n📌 مثال : ${usedPrefix + command} @الشخص`
if (global.prems.includes(who.split`@`[0])) throw '□ منشن الشخص الذي تريد أن تضيف تضيف له بريميام'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ بــريـميام

@${who.split`@`[0]} الآن لقد أصبحت مستخدم بريميام !!

╣ *المنشن:* ${user.name}
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'أضف_بريميام'] 

handler.group = true
handler.rowner = true

export default handler
