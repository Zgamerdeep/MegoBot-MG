let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*لقد قضيت معكم وقتاً رائعاً إلى اللقاء تحياتي زورو بوت ⁦^⁠_⁠^⁩*') 
await conn.groupLeave(id)}
handler.command = /^(أخرج|إطلع|غادر|خروج)$/i
handler.group = true
handler.rowner = true
export default handler
