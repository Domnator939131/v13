const {Client, Message, MessageEmbed, Permissions} = require('discord.js')

module.exports = {
    name: 'createmodrole',
    UserPerms: ["MANAGE_ROLES"],
    BotPerms: ["MANAGE_ROLES"],

    run: async (client, message, args) => {

        const argument = args.slice(0).join(" ")

        if(!args) {

             const errorembed = new MessageEmbed
                        errorembed.setTitle(`Please provide a name for the role`)
                        errorembed.setColor("#2a2d2e")
                        errorembed.setTimestamp()
                        errorembed.setFooter(`Error generated`)
                        message.channel.send({embeds: [errorembed]})
                        return
        }

        try {
            message.guild.roles.create(
                {name: `${argument}`, permissions: 
                [Permissions.FLAGS.BAN_MEMBERS, Permissions.FLAGS.CHANGE_NICKNAME, Permissions.FLAGS.DEAFEN_MEMBERS, Permissions.FLAGS.MANAGE_CHANNELS, Permissions.FLAGS.CONNECT, Permissions.FLAGS.KICK_MEMBERS,
                    Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS, Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.MENTION_EVERYONE, Permissions.FLAGS.MOVE_MEMBERS, Permissions.FLAGS.MUTE_MEMBERS,
                    Permissions.FLAGS.VIEW_AUDIT_LOG],
                
            }
            )
        } catch (err) {
            console.log(err)
            const errorembed = new MessageEmbed
                       errorembed.setTitle(`Something went wrong. Try again`)
                       errorembed.setColor("#2a2d2e")
                       errorembed.setTimestamp()
                       message.channel.send({embeds: [errorembed]})
                       return
        }

        const embed = new MessageEmbed
        embed.setTitle(`Created mod role successfully`)
        embed.setColor('#2a2d2e')
        embed.addFields(
            {name: `Name`, value: `\`\`\`${argument}\`\`\``},
            {name: `Created by`, value: `\`\`\`${message.author.username}\`\`\``},
            {name: `Permissions`, value: `\`\`\`Ban Members, Change Nicknames, Deafen Members, Manage Channels, Kick Members, Manage emojis and stickers, Manage Messages, Mention Everyone, Move Members, Mute Members, View Audit Log\`\`\``}
        )
        message.channel.send({embeds: [embed]})


   }
}
