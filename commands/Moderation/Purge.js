const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ['clear'],
    UserPerms: ['MANAGE_MESSAGES'],
    BotPerms: ['MANAGE_MESSAGES'],
  
    run: async (client, message, args, Discord) => {

        const embed = new MessageEmbed
        embed.setTitle(`You can't delete more than 100 messages at a time`)
        embed.setColor('#2a2d2e')
        embed.setFooter(`Error generated`)
        embed.setTimestamp()
        
        const errorembed = new MessageEmbed
        errorembed.setTitle(`\`\`\`Error occured. Something went wrong\`\`\``)
        errorembed.setColor('#2a2d2e')
       errorembed.setFooter(`Error generated`)
        errorembed.setTimestamp()
        
        const embed1 = new MessageEmbed
        embed1.setTitle(`Messages purged successfully`)
        embed1.setColor("#2a2d2e")
        embed1.setFooter(`This msg deletes in 5 seconds`)
        embed1.setTimestamp()

        try {
            let delamount = args[0];
         
            if(!args[0]) {
                const embed2 = new MessageEmbed
                embed2.setTitle(`Please provide a valid number`)
                embed2.setColor("#2a2d2e")
                embed2.setFooter("Error generated")
                embed2.setTimestamp()
                message.channel.send({embeds: [embed2]})
                return
            }
            if (parseInt(delamount) > 100) return message.channel.send({embeds: [embed]})

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            await message.channel.send({embeds: [embed1]}).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 5000) 
            })
        } catch (e) {
            message.channel.send({embeds: [errorembed]})
            console.log(e)
            
        } 
    }
}