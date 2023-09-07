const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'unban',
    aliases: ["un-ban", "pardon"],
    UserPerms: ["BAN_MEMBERS"],
    BotPerms: ["BAN_MEMBERS"],

    run: async (client, message, args) => {

        try {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        
        const embed1 = new MessageEmbed
        embed1.setTitle(`Please specify a user to unban`)
        embed1.setColor("#2a2d2e")
        embed1.setFooter(`Error generated`)
        embed1.setTimestamp()

        const embed2 = new MessageEmbed
        embed2.setTitle(`The user you mentioned does not seem to exist. Try again properly`)
        embed2.setColor("#2a2d2e")
        embed2.setFooter(`Error generated`)
        embed2.setTimestamp()

        const embed4 = new MessageEmbed
        embed4.setTitle(`You can't unban yourself ??`)
        embed4.setColor("#2a2d2e")
        embed4.setFooter(`Error generated`)
        embed4.setTimestamp()

        if(!args[0]) return message.channel.send({embeds: [embed1]});


        if(member.id === message.author.id) return message.channel.send({embeds: [embed4]});

        try {
            await message.guild.bans.fetch(member.id)
        } catch {
            return message.channel.send({embeds: [embed2]})
        }        
        const banembed = new MessageEmbed
        banembed.setTitle('Member Unbanned')
        banembed.setColor("#2a2d2e")
        banembed.setThumbnail(member.user.displayAvatarURL())
        banembed.addField('User Unbanned', `\`\`\`${member.user.username}#${member.user.discriminator}\`\`\``)
        banembed.addField('Unanned by', `\`\`\`${message.author.tag}\`\`\``)
        banembed.setFooter(`Generated for ${message.author.tag}`)
        banembed.setTimestamp()

        } catch {

        const errorembed = new MessageEmbed
        errorembed.setTitle(`\`\`\`Error occured. Something went wrong\`\`\``)
        errorembed.setColor('#2a2d2e')
        errorembed.setFooter(`Error generated`)
        errorembed.setTimestamp()

            return message.channel.send({embeds: [errorembed]})
        }


   }
}
