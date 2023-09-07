const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'rgnlist',
    aliases: ['region-list', 'regionlist'],
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args) => {

        const embed = new MessageEmbed
        embed.setTitle(`Avaible Regions`)
        embed.setColor(`#2a2d2e`)
        embed.setDescription(` \`\`\`
         'bz'  : "Brazil",
         'hk'  : "Hong Kong",
         'ind' : "India",
         'jp'  : "Japan",
         'rus' : "Russia",
         'sng' : "Singapore",
         'sa'  : "South Africa",
         'syd' : "Sydney",
         'usc' : "Us Central",
         'use' : "Us East",
         'uss' : "Us South",
         'usw' : "Us West",
         'eur' : "Europe"\`\`\`
       `)
       message.channel.send({embeds: [embed]})

    }
}