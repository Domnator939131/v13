const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'server-icon',
    aliases: ["servericon", "sicon"],
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["EMBED_LINKS"],

    run: async (client, message, args) => {

        const server = message.guild
        const embed = new MessageEmbed  
        embed.setTitle(`\`\`\`${server.name}'s Icon\`\`\``)
        embed.setImage(server.iconURL({ size: 2048, dynamic: true, format: "png" }))
        embed.setDescription(`[Server Icon URL](${server.iconURL({ size: 2048, dynamic: true, format: "png" })})`)
        embed.setColor(`#2a2d2e`)
        message.channel.send({embeds: [embed]})

   }
}
