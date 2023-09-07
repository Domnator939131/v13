const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'ban',
    UserPerms: ['BAN_MEMBERS'],
    BotPerms: ['BAN_MEMBERS'],

    run: async (client, message, args) => {

        const embed1 = new MessageEmbed
        embed1.setTitle(`Please specify a user to ban`)
        embed1.setColor("#2a2d2e")
        embed1.setFooter(`Error generated`)
        embed1.setTimestamp()

        const embed2 = new MessageEmbed
        embed2.setTitle(`The user you mentioned does not seem to exist. Try again properly`)
        embed2.setColor("#2a2d2e")
        embed2.setFooter(`Error generated`)
        embed2.setTimestamp()

        const embed3 = new MessageEmbed
        embed3.setTitle(`That user could not be banned as they have the same or a higher role than the bot`)
        embed3.setColor("#2a2d2e")
        embed3.setFooter(`Error generated`)
        embed3.setTimestamp()

        const embed4 = new MessageEmbed
        embed4.setTitle(`You can't ban yourself ??`)
        embed4.setColor("#2a2d2e")
        embed4.setFooter(`Error generated`)
        embed4.setTimestamp()

        const errorembed = new MessageEmbed
        errorembed.setTitle(`\`\`\`Error occured. Something went wrong\`\`\``)
        errorembed.setColor('#2a2d2e')
        errorembed.setFooter(`Error generated`)
        errorembed.setTimestamp()
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send({embeds: [embed1]});

        if(!member) return message.channel.send({embeds : [embed2]});
        if(!member.bannable) return message.channel.send({embeds: [embed3]});

        if(member.id === message.author.id) return message.channel.send({embeds: [embed4]});

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban({reason:`${reason}`}).catch(err => { 
          message.channel.send({embeds : [errorembed]})
            console.log(err)
            return
        })

        const banembed = new MessageEmbed()
        banembed.setTitle('Member Banned')
        banembed.setColor("#2a2d2e")
        banembed.setThumbnail(member.user.displayAvatarURL())
        banembed.addField('User Banned', `\`\`\`${member.user.username}#${member.user.discriminator}\`\`\``)
        banembed.addField('Banned by', `\`\`\`${message.author.tag}\`\`\``)
        banembed.addField('Reason', `\`\`\`${reason}\`\`\``)
        banembed.setFooter(`Generated for ${message.author.tag}`)
        banembed.setTimestamp()

        const kickembed = new MessageEmbed
        kickembed.setTitle(`Member Kicked`)
        kickembed.setColor('#2a2d2e')
        kickembed.setThumbnail(member.user.displayAvatarURL())
        kickembed.addField(`Banned by, \`\`\`${message.author.tag}\`\`\``)
        kickembed.addField(`Reason`, `\`\`\`${reason}\`\`\``)
        banembed.setTimestamp()

        message.channel.send({embeds: [banembed]});

        message.channel.send({embeds: [kickembed]});

        

    }
} 