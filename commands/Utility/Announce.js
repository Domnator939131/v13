const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'announce',
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],

    run: async (client, message, args) => {

        const anchannel = message.mentions.channels.first() 

        if(!anchannel) {
             const errorembed = new MessageEmbed
                        errorembed.setTitle(`Mention a channel first to send the annoucement to`)
                        errorembed.setColor("#2a2d2e")
                        errorembed.setFooter(`Error generated`)
                        errorembed.setTimestamp()
                        return message.channel.send({embeds: [errorembed]})
        }

        if (!args.slice(1).join(" ")) {
            
             const errorembed = new MessageEmbed
                        errorembed.setTitle(`Please enter a message to be announced`)
                        errorembed.setColor("#2a2d2e")
                        errorembed.setFooter(`Error generated`)
                        errorembed.setTimestamp()
                        return message.channel.send({embeds: [errorembed]})
            
          }

          let embed = new MessageEmbed()
          .setTitle(`\`\`\`Server Annoucement\`\`\``)
          .setDescription(args.slice(1).join(" "))
          .setColor("#2a2d2e")
        anchannel.send({ embeds: [embed] });
    
        let anembed = new MessageEmbed()
          .setTitle("\`\`\`Announcement Sent\`\`\`")
          .setDescription(`The message has been sent successfully to ${anchannel}`)
          .setColor("#2a2d2e");
    
        message.channel.send({ embeds: [anembed] });
        message.delete();

   }
}
