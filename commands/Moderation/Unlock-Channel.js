const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'unlock-channel',
    aliases: ["uc", "unlockchannel"],
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],

    run: async (client, message, args) => {

        try {
            message.channel.permissionOverwrites.delete(message.channel.guild.roles.everyone
              );
        } catch (e) {
            console.log(e);
        }
        
        const embed = new MessageEmbed
        embed.setTitle(`\`\`\`${message.channel.name}\`\`\` has been unlocked successfully`)
        embed.setColor(`#2a2d2e`)

        message.channel.send({embeds: [embed]});

   }
}
