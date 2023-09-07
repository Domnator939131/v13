const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'enable-nuke',
    UserPerms: ["SEND_MESSAGES"],
    aliases: ["enablenuke"],
    minArgs: 0,
    maxArgs: 0,
    syntax: 'v!enablenuke [toggled]',
    ownerOnly: true,

    run: async (client, message, args) => {

        const option = db.get(`ownerOnlyConfig.enablenuke`)

        if(option == false) {

            const doit = await db.set(`ownerOnlyConfig.enablenuke`, true)

            const embed = new MessageEmbed
            embed.setTitle(`Nuke mode has been enabled`)
            embed.setColor(`#2a2d2e`)
            message.author.send({embeds:[embed]})
            return
        }        

        db.set(`ownerOnlyConfig.enablenuke`, false)

        const embed = new MessageEmbed
        embed.setTitle(`Nuke mode has been disabled`)
        embed.setColor('#2a2d2e')
        message.author.send({embeds:[embed]})
     

    }
}