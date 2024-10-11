import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
    let Ballu = 'https://telegra.ph/file/aba12083d53dc30f5ccc9.jpg'
    
  let Anagha = `
┌─❖
│「 *𝐊𝐄𝐈𝐊𝐎 𝐌𝐎𝐉𝐎🌩️*」
│
│     🛠️Made By
│              BalluXnt㋡ 
│         
└┬❖ 「 *⚠️ SCRIPT* 」
  │
  │☞ *💫OWNER:* Ballu xɴᴛ
  │
  │☞ *🌬️OPARATOR:* Balram
  │
  └─────────────┈ ⳹
  `
let Anu = "© Ballu-𝙎𝞢𝞒"
conn.sendButton(m.chat, Anagha, Anu, Ballu, [], null, [['BOT SCRIPT ㋡', 'https://GitHub.com/AmeenRepo/KEIKO-V5']], m)
m.react('🎟️')
}
handler.help = ['main']
handler.command = ['sc', 'repo']

export default handler
