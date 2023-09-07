const {Client, Message, MessageEmbed} = require('discord.js')

const {pagination} = require('reconlx')

module.exports = {
    name: 'help-moderation',
    aliases: ["help-mod"],
    UserPerms: ["SEND_MESSAGES"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args) => {

        const mod1 = new MessageEmbed()
        .setTitle(`\`\`\`Moderation Commands\`\`\``)
        .setDescription(`Press the buttons to move around the menu \n  \`\`\`v!help [command]\`\`\` for more information about that command`)
        .setThumbnail('https://cdn.discordapp.com/avatars/887347896150814740/206726ad3ce8454c8570e6abf69faf05.png?size=256')      
        .setColor('#2a2d2e');

        const mod2 = new MessageEmbed()
        .setTitle(`\`\`\`Moderation Commands\`\`\``)
        .addFields(
            {name: `\`\`\`kick [user]\`\`\``, value:`Kicks the mentioned user from the server`},
            {name: `\`\`\`ban [user] [reason]\`\`\``, value: `Bans the mentioned user`},
            {name: `\`\`\`purge [no.of messages]\`\`\``, value: `Deletes the mentioned number of messages [Max-99]`},
            {name: `\`\`\`unban [user]\`\`\``, value: `Unbans the mentioned user`},
            {name: `\`\`\`lock-channel\`\`\``, value: `Locks the channel the current message is sent in`},
            {name: `\`\`\`unlock-channel\`\`\``, value: `Unlocks the current channel the message is sent in`}
        )
        .setColor('#2a2d2e');

        const mod3 = new MessageEmbed()
        .setTitle(`\`\`\`Moderation Commands\`\`\``)
        .setColor('#2a2d2e')
        .addFields(
            {name: `\`\`\`give-role [user] [role]\`\`\``, value: `Gives the mentioned user the mentioned role`},
            {name: `\`\`\`remove-role [user] [role]\`\`\``, value: `Removes the mentioned role from the mentioned user`},
            {name: `\`\`\`slow-down [number in seconds]\`\`\``, value: `Sets slow mode for the amount of time inputed in the channel`},
            {name: `\`\`\`delete-channel\`\`\``, value: `Deletes the channel this message is sent in`},
            {name: `\`\`\`set-region [region name]\`\`\``, value:`Sets the region of the server [region list = v!rgnlist]` },
            {name: `\`\`\`createtextchannel [name]\`\`\``, value: `Creates a text channel with the inputed name`},
        )

        const mod4 = new MessageEmbed()
        .setTitle(`\`\`\`Moderation Commands\`\`\``)
        .setColor('#2a2d2e')
        .addFields(
            {name: `\`\`\`createvoicechannel [name]\`\`\``, value: `Creates a voice channel with the inputed name`},
            {name: `\`\`\`createstagechannel\`\`\``, value: `Creates a stage channel with the inputed name`}
        )

        const embeds = [mod1, mod2, mod3, mod4]

        pagination({
            embeds: embeds,
            channel: message.channel,
            author: message.author,
            time: 30000,
            fastSkip: true
        }).catch(err => {
            console.log(err)
            return
        })

   }
}
