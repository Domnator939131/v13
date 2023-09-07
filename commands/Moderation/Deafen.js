const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'deafen',
    UserPerms: ["DEAFEN_MEMBERS"],
    BotPerms: ["DEAFEN_MEMBERS"],

    run: async (client, message, args) => {

        if(!args[0]) {
             const embed1 = new MessageEmbed
                        embed1.setTitle(`Mention a valid user to deafen`)
                        embed1.setColor("#2a2d2e")
                        embed1.setFooter(`Error generated`)
                        embed1.setTimestamp()
                        
                        message.channel.send({embeds: [embed1]})
        }

        

   }
}
