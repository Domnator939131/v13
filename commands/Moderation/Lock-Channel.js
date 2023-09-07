const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'lock-channel',
    aliases: ['lockchannel', 'lc'],
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],

    run: async (client, message, args) => {

        const arguments = args.join(' ') || `None`
        
        try {
            message.channel.permissionOverwrites.create(message.channel.guild.roles.everyone,{
                  SEND_MESSAGES: false,
                  ADD_REACTIONS:false
                },
              );
        } catch (e) {
            console.log(e);
        }
        
        const embed = new MessageEmbed
        embed.setTitle(`\`\`\`${message.channel.name}\`\`\` has been locked succesfully | Reason - ${arguments}`)
        embed.setColor(`#2a2d2e`)

        message.channel.send({embeds: [embed]});

    }
}