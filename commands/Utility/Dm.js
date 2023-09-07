const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'dm',
    UserPerms: ["MANAGE_CHANNELS"],
    minArgs: 2,
    maxArgs: 100000,
    syntax: 'v!dm [user] [message]',

    run: async (client, message, args) => {

        
        const target = message.mentions.members.first() || message.author

        const msg = args.slice(1).join(" ")

        target.send(`${msg}`)



   }
}
