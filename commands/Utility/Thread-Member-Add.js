const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'threadmemberadd',
    UserPerms: ["MANAGE_THREADS"],
    BotPerms: ["MANAGE_THREADS"],

    run: async (client, message, args) => {

        const membername = message.mentions.members.first()

        const threadjoin = args.slice(1).join(" ")

        if(!membername) {
             const errorembed = new MessageEmbed
                        errorembed.setTitle(`Provide a member to add to the thread`)
                        errorembed.setColor("#2a2d2e")
                        errorembed.setFooter(`Error generated`)
                        errorembed.setTimestamp()
                        message.channel.send({embeds: [errorembed]})
        }

        if(!threadjoin) {
            const errorembed = new MessageEmbed
            errorembed.setTitle(`Provide a valid name for the thread`)
            errorembed.setColor("#2a2d2e")
            errorembed.setFooter(`Error generated`)
            errorembed.setTimestamp()
            message.channel.send({embeds: [errorembed]})
        }

        const thread = channels.threads.cache.find(x => x.name === `${threadjoin}`)

        await thread.members.add(`${membername.id}`)

        const embed = new MessageEmbed
        embed.setTitle(`Member added`)
        embed.addFields(
            {name: `Member name`, value: `${membername}`},
            {name: `Thread added to`, value: `${thread.name}`}
        )
        embed.setColor("#2a2d2e")
        message.channel.send({embeds: [embed]})


   }
}
