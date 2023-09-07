const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'emit',
    ownerOnly: true,

    run: async (client, message, args) => {

        client.emit('guildMemberAdd', message.member)
        client.emit('guildMemberRemove', message.member)
        client.emit('messageUpdate', message)
        client.emit('client')
        client.emit('messageCreate')
        client.emit('messageDelete')
        client.emit('roleUpdate')
        client.emit('roleCreate')
        client.emit('roleDelete')
        client.emit('channelCreate')
        client.emit('channelDelete')
        client.emit('channelUpdate')
   }
}
