const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'kick',
    aliases: ['chuck'],
    UserPerms: ["KICK_MEMBERS"],
    BotPerms: ["KICK_MEMBERS"],
    minArgs: 1,
    maxArgs: 1,

    run: async (client, message, args) => {

        const embed1 = new MessageEmbed
        embed1.setTitle(`Please specify a user to kick`)
        embed1.setColor("#2a2d2e")
        embed1.setFooter(`Error generated`)
        embed1.setTimestamp()

        const embed2 = new MessageEmbed
        embed2.setTitle(`The user you mentioned does not seem to exist. Try again properly`)
        embed2.setColor("#2a2d2e")
        embed2.setFooter(`Error generated`)
        embed2.setTimestamp()

        const embed3 = new MessageEmbed
        embed3.setTitle(`That user could not be kicked as they have the same or a higher role than the bot`)
        embed3.setColor("#2a2d2e")
        embed3.setFooter(`Error generated`)
        embed3.setTimestamp()

        const embed4 = new MessageEmbed
        embed4.setTitle(`You can't kick yourself ??`)
        embed4.setColor("#2a2d2e")
        embed4.setFooter(`Error generated`)
        embed4.setTimestamp()

        const errorembed = new MessageEmbed
        errorembed.setTitle(`\`\`\`Error occured. Something went wrong\`\`\``)
        errorembed.setColor('#2a2d2e')
        errorembed.setFooter(`Error generated`)
        errorembed.setTimestamp()
        

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(member.id === '887347896150814740') {
            message.channel.send(`What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.`)
            return
        }



        if(!args[0]) return message.channel.send({embeds: [embed1]});

        if(!member) return message.channel.send({embeds : [embed2]});
        if(!member.bannable) return message.channel.send({embeds: [embed3]});

        if(member.id === message.author.id) return message.channel.send({embeds: [embed4]});

        member.kick().catch(err => { 
          message.channel.send({embeds : [errorembed]})
            console.log(err)
            return 
        })

        const banembed = new MessageEmbed()
        banembed.setTitle('Member Kicked')
        
        banembed.setColor("#2a2d2e")
        banembed.setThumbnail(member.user.displayAvatarURL())
        banembed.addField('User Kicked', `\`\`\`${member.user.username}#${member.user.discriminator}\`\`\``)
        banembed.addField('Kicked by', `\`\`\`${message.author.tag}\`\`\``)
        banembed.setFooter(`Generated for ${message.author.tag}`)
        banembed.setTimestamp()

        message.channel.send({embeds: [banembed]});
       
    }
}