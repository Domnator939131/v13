const {Client, Message, MessageEmbed} = require('discord.js')
const db =  require('quick.db')

module.exports = {
    name: 'warn',
    UserPerms: ["MANAGE_MESSAGES"],

    run: async (client, message, args) => {

        if(!args) {
            message.channel.send(`use proper syntax`)
            return
        }

        const target = message.mentions.members.first()

        if(!target) {
            const errorembed = new MessageEmbed
                       errorembed.setTitle(`Please provide a valid member to warn`)
                       errorembed.setColor("#2a2d2e")
                       errorembed.setFooter(`Error Generated`)
                       errorembed.setTimestamp()
                       message.channel.send({embeds: [errorembed]})
        }      
        
        db.add(`UserInfo.${message.guild.id}.${target.id}.warns`, 1)
        const warns = db.get(`UserInfo.${message.guild.id}.${target.id}.warns`)
        
        const embed = new MessageEmbed
        embed.setTitle(`The user has been warned`)
        embed.setDescription(`They now have \`${warns}\` warnings`)
        embed.setColor('#2a2d2e')
        message.channel.send({embeds: [embed]})



   }
}
