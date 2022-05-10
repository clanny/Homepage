const axios = require('axios')
const noblox = require('noblox.js')
const fs = require('fs')

const REQ1 = process.env.REQ_1
const REQ2 = process.env.REQ_2
const REQ3 = process.env.REQ_3
const REQ4 = process.env.REQ_4

const ClannyAccounts = [
    "ClannyBot",
    "ClannyBot2",
    "ClannyBot3",
    "ClannyBot4",
    "ClannyBot5",
    "ClannyBot6",
    "ClannyBot7",
    "ClannyBot8",
    "ClannyBot9",
    "ClannyBot10",
    "ClannyBot11",
    "ClannyBot12",
    "ClannyBot13",
    "ClannyBot14",
    "ClannyBot15",
    "ClannyBot17",
    "ClannyBot21",
    "ClannyExclusive1",
    "ClannyExclusive2",
    "ClannyExclusive3",
    "ClannyExclusive4",
    "ClannyExclusive5",
    "ClannyExclusive6",
    "ClannyExclusive7",
    "ClannyExclusive8",
    "ClannyExclusive9",
    "ClannyExclusive10",
    "ClannyBotX1",
    "ClannyBotX2",
    "ClannyBotX3",
    "ClannyBotX4",
    "ClannyBotX5",
    "ClannyBotX6",
    "ClannyBotX7",
    "ClannyBotX8",
    "ClannyBotX9",
]

async function GetTotalUserCount() {
    let UserCount = 0
    for (let i = 0; i < ClannyAccounts.length; i++) {
        let Account = ClannyAccounts[i]
        console.log(Account)
        let Groups = await noblox.getGroups(await noblox.getIdFromUsername(Account))
        
        for (let i2 = 0; i2 < Groups.length; i2++) {
            let Group = Groups[i2]
            UserCount += Group.MemberCount
        }
    }
    fs.writeFileSync('./docs/data/count2.json', JSON.stringify({ UserCount }))
}

axios.get(REQ1, {
    headers: JSON.parse(REQ2)
}).then(res => {
    const data = res.data
    fs.writeFileSync('./docs/data/count.json', JSON.stringify({c: data[REQ3][REQ4]}))
    GetTotalUserCount()
})