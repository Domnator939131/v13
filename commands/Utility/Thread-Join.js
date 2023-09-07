const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'threadjoin',
    aliases: ["thread-join"],
    UserPerms: ["MANAGE_THREADS"],
    BotPerms: ["MANAGE_THREADS"],

    run: async (client, message, args) => {


        const threadjoin = args.slice(0).join(" ")

        if(!threadjoin) {
            const errorembed = new MessageEmbed
            errorembed.setTitle(`Enter a valid thread name`)
            errorembed.setColor("#2a2d2e")
            errorembed.setFooter(`Error generated`)
            errorembed.setTimestamp()
            message.channel.send({embeds: [errorembed]})
            return
        }
        
        const thread = channels.threads.cache.find(x => x.name === `${threadjoin}`)

        if(thread.joinable) await thread.join()

        const embed = new MessageEmbed
        embed.setTitle(`Joined the thread \`\`\`${threadjoin}\`\`\` successfully`)
        embed.setColor(`#2a2d2e`)

        message.channel.send({embeds: [embed]})

   }
}
