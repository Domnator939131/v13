const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'logs-set',
    UserPerms: ["ADMINISTRATOR"],
    minArgs: 1,
    maxArgs: 1,
    syntax: 'v!logs-set #[channel]',
    description: 'Used to set the logs channel',
    example: 'v!logs-set #general',

    run: async (client, message, args) => {

        const channel = message.mentions.channels.first()

        if(!channel) {
            const embed = new MessageEmbed
            embed.setTitle(`Please mention a channel to set as the mod-logs channel`)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        }

        const x = db.set(`logschannel.${message.guild.id}.channel`, channel.id)
        const y = db.set(`logschannel.${message.guild.id}.enabled`, false)
        const embed = new MessageEmbed
        embed.setTitle(`\`${channel.name}\` has been set as the logs channel`)
        embed.setColor('#2a2d2e')
        message.channel.send({embeds:[embed]})

   }
}
