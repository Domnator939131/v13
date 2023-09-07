const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'delete-channel',
    aliases: ['dc', 'deletechannel'],
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],

    run: async (client, message, args) => {

        message.channel.delete()
   }
}
