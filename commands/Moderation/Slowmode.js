const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'slowdown',
    aliases: ["slow-down","sd"],
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS","SEND_MESSAGES"],

    run: async (client, message, args) => {

        const embed = new MessageEmbed
        embed.setTitle(`Please provide a number to set the slowdown for this channel`)
        embed.setColor('#2a2d2e')
        embed.setFooter(`Error generated`)
        embed.setTimestamp()
    
        const embed1 = new MessageEmbed
        embed1.setTitle(`That is not a valid number`)
        embed1.setColor('#2a2d2e')
        embed1.setFooter(`Error generated`)
        embed1.setTimestamp()
    
        const embed2 = new MessageEmbed
        embed2.setTitle(`0 is not a valid argument`)
        embed2.setColor('#2a2d2e')
        embed2.setFooter(`Error generated`)
        embed2.setTimestamp()
    
        const embed3 = new MessageEmbed
        embed3.setTitle(`Negative numbers cannot be given`)
        embed3.setColor('#2a2d2e')
        embed3.setFooter(`Error generated`)
        embed3.setTimestamp()
      
        if (!args[0])
          return message.channel.send({embeds: [embed]})
          
        if (isNaN(args[0])) return message.channel.send({embeds: [embed1]});
    
        if(args[0] > 21600) {
            const embed = new MessageEmbed
            embed.setTitle(`You cannot set the slowmode timer to over 21600 seconds`)
            embed.setColor('#2a2d2e')
            embed.setFooter(`Error generated`)
            embed.setTimestamp()
            message.channel.send({embeds: [embed]})
        }
    
        if (args[0] < 0) return message.channel.send({embeds:[embed3]});
    
    
        
        message.channel.setRateLimitPerUser(args[0]);
    
        
        const embed4 = new MessageEmbed
        embed4.setTitle(`Slowmode of this channel has been set to **${args[0]}** seconds`)
        embed4.setColor('#2a2d2e')
    
        message.channel.send({embeds: [embed4]})

   }
}
