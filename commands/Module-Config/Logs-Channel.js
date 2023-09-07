const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'module-logs',
    UserPerms: ["ADMINISTRATOR"],
    minArgs: 1,
    maxArgs: 1,
    syntax: 'v!module-logs [enable/disable]',
    description: 'To enable or disable the logging system',
    example: 'v!module-logs enable',

    run: async (client, message, args) => {

        const option = args.join(" ")

        if(option === 'enable') {
            const x = db.set(`logschannel.${message.guild.id}.enabled`, true)
            const embed = new MessageEmbed
            embed.setTitle(`Logging system has been \`enabled\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        }
        else if(option === 'disable') {
            const x = db.set(`logschannel.${message.guild.id}.enabled`, false)
            const embed = new MessageEmbed
            embed.setTitle(`Logging system has been \`disabled\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        }

        else {
            const embed = new MessageEmbed
            embed.setTitle(`Give a valid input, Either \`enable\` or \`disable\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        }

   }
}
