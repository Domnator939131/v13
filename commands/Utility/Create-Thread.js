const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'threadcreate',
    aliases: ["tc"],
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],

    run: async (client, message, args) => {

        const threadname = args.slice(1).join(" ")

        let autoArchive = 0

        if(autoArchive = `1hour`) autoArchive = 60;

        if(autoArchive = `24hour`) autoArchive = 1440;

       if(!autoArchive === `24hour`) return message.channel.send(`Hey`)
       if(!autoArchive === `1hour`) return message.channel.send(`Hey`)

        if(!threadname) {

             const errorembed = new MessageEmbed
                        errorembed.setTitle(`Provide a name for the thread you are making`)
                        errorembed.setColor("#2a2d2e")
                        errorembed.setFooter(`Error generated`)
                        errorembed.setTimestamp()
                        message.channel.send({embeds: [errorembed]})

                        return
        }
        
        const thread = await message.channel.threads.create({
            name: `${threadname}`,
            autoArchiveDuration: autoArchive,
        })

        const embed = new MessageEmbed
        embed.setTitle(`\`\`\`Thread created\`\`\``)
        embed.addFields(
            {name: `Thread name`, value: `\`\`\`${thread.name}\`\`\``},
            {name: `Created by`, value: `\`\`\`${message.author.tag}\`\`\``},
            {name: `Auto-Archive Duration`, value: `\`\`\`${args[0]}\`\`\``}
        )
        embed.setColor(`#2a2d2e`)

        message.channel.send({ embeds: [embed]})


   }
}
