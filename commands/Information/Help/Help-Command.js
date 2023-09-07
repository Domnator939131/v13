const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'help-command',
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ['SEND_MESSAGES'],
    minArgs:1,
    maxArgs: 1,
    syntax: 'help-command [command name]',

    run: async (client, message, args) => {
        
            const CMA = args.toString()

           try {
            let CM = client.commands.get(CMA)

            const Cap = {
                false: `False`,
                true: `True`
            }

            const PropPerms = {
                'CREATE_INSTANT_INVITE': `Create Instant Invite`,
                'KICK_MEMBERS': `Kick Members`,
                'BAN_MEMBERS': `Ban Members`,
                'ADMINISTRATOR': `Administrator`,
                'MANAGE_CHANNELS': `Manage Channels`,
                'MANAGE_GUILD': `Manage Guild`,
                'ADD_REACTIONS': `Add Reactions`,
                'VIEW_AUDIT_LOG': `View Audit Log`,
                'PRIORITY_SPEAKER': `Priority Speaker`,
                'STREAM': `Stream`,
                'VIEW_CHANNEL': `View Channel`,
                'SEND_MESSAGES': `Send Messages`,
                'SEND_TTS_MESSAGES': `Send Text-To-Speech Messages`,
                'MANAGE_MESSAGES': `Manage Messages`,
                'EMBED_LINKS': `Embed Links`,
                'ATTACH_FILES': `Attach Files`,
                'READ_MESSAGE_HISTORY': `Read Message History`,
                'MENTION_EVERYONE': `Mention Everyone`,
                'USE_EXTERNAL_EMOJIS': `Use External Emojis`,
                'VIEW_GUILD_INSIGHTS': `View Guild Insights`,
                'CONNECT': `Connect`,
                'SPEAK': `Speak`,
                'MUTE_MEMBERS': `Mute Members`,
                'DEAFEN_MEMBERS': `Deafen Members`,
                'MOVE_MEMBERS': `Move Members`,
                'USE_VAD': `Use VAD`,
                'CHANGE_NICKNAME': `Change Nickname`,
                'MANAGE_NICKNAMES': `Manage Nicknames`,
                'MANAGE_ROLES': `Manage Roles`,
                'MANAGE_WEBHOOKS': `Manage Webhooks`,
                'MANAGE_EMOJIS_AND_STICKERS': `Manage Emojis and Stickers`,
                'USE_APPLICATION_COMMANDS': `Use Slash Commands`,
                'REQUEST_TO_SPEAK': `Request To Speak`,
                'MANAGE_EVENTS': `Manage Events`,
                'MANAGE_THREADS': `Manage Threads`,
                'CREATE_PUBLIC_THREADS': `Create Public Threads`,
                'CREATE_PRIVATE_THREADS': `Create Private Threads`,
                'USE_EXTERNAL_STICKERS': `Use External Stickers`,
                'SEND_MESSAGES_IN_THREADS': `Send Messages in Threads`,
                'START_EMBEDDED_ACTIVITES': `Start Embedded Activities`,
                'MODERATE_MEMBERS': `TimeOut Members`
            }
       

            const embed = new MessageEmbed
            embed.setTitle(`Help for command \`${CM.name}\``)
            embed.addFields(
                {name: `User Permissions`, value: `\`${PropPerms[CM.UserPerms]}\``, inline:true},
                {name: `Bot Permissions`, value: `\`${PropPerms[CM.BotPerms]}\``, inline:true},
                {name: `Usage`, value: `\`${CM.syntax}\``, inline:true},
                {name: `Description`, value: `\`${CM.description}\``, inline:true},
                {name: `Is NSFW`, value: `\`${Cap[CM.Isnsfw]}\``, inline:true},
                {name: `Guild-Only`, value: `\`${Cap[CM.guildOnly]}\``, inline:true},
                {name: `Example`, value: `\`${CM.example}\``, inline:true}
            )
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})

           } catch(err) {
               const embed = new MessageEmbed
               embed.setTitle(`Provide a valid commmand name, Avoid using aliases of a command`)
               embed.setColor('#2a2d2e')
               message.channel.send({embeds: [embed]})
           }
        }
}

