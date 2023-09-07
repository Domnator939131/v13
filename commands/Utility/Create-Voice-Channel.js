const {Client, Message, MessageEmbed} = require('discord.js')

const config = require('../../config.json')

module.exports = {
    name: 'createvoicechannel',
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],

    run: async (client, message, args) => {

        const channelname = args.slice(1).join(" ");

        const name = message.content.replace(`${config.prefix}createvoicechannel `, ' ')

        message.guild.channels.create(name, {
             type: 'GUILD_VOICE',
         })

        const embed = new MessageEmbed
        embed.setTitle(`\`\`\`${name}\`\`\` channel created successfully`)
        embed.setColor("#2a2d2e")

        message.channel.send({embeds: [embed]})

   }
}
