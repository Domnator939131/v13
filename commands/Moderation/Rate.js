const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'gayrate',
    BotPerms: ["SEND_MESSAGES"],
    UserPerms: ["SEND_MESSAGES"],
    minArgs: 0,
    maxArgs: 1,
    syntax: `v!gayrate [user/self]`,
    description: 'check who is the gay dude here',

    run: async (client, message, args) => {

        const target = message.mentions.members.first() || message.author

        if(target.id === '614076042901979156') {
            message.channel.send(`${target} is 0% gay`)
            return
        }

        if(target.id === '771097597833510952') {
            message.channel.send(`${target} is 100% gay`)
            return
        }

        if(target.id === client.user.id) {
            message.channel.send(`${target} is 0% gay`)
            return
        }

        const rndInt = Math.floor(Math.random() * 100) + 1

        message.channel.send(`${target} is ${rndInt}% gay`)


   }
}
