const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'log-options',
    UserPerms: ["logoptions"],
    minArgs: 2,
    maxArgs: 2,
    syntax: 'v!log-options [Log Option] [enable/disable] ',
    description: 'Used to configure which things should be logged by the bot',
    example: 'v!log-options channelupdate true',

    run: async (client, message, args) => {

        

    }
}