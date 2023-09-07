const {Client, Message, MessageEmbed} = require('discord.js')

const {pagination} = require('reconlx')

module.exports = {
    name: 'help-information',
    aliases: ["help-info"],
    UserPerms: ["SEND_MESSAGES"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args) => {

        const mod1 = new MessageEmbed()
        .setTitle(`\`\`\`Information Commands\`\`\``)
        .setDescription(`Press the buttons to move around the menu \n  \`\`\`v!help [command]\`\`\` for more information about that command`)
        .setThumbnail('https://cdn.discordapp.com/avatars/887347896150814740/206726ad3ce8454c8570e6abf69faf05.png?size=256')      
        .setColor('#2a2d2e');

        const mod2 = new MessageEmbed()
        .setTitle(`\`\`\`Information Commands\`\`\``)
        .addFields(
            {name: `\`\`\`member-info [user/self]\`\`\``, value:`Shows details about the mentioned user or yourself`},
            {name: `\`\`\`role-info\`\`\``, value: `Shows details about the mentioned role`},
            {name: `\`\`\`roles\`\`\``, value: `Displays all the roles in the server`},
            {name: `\`\`\`server-avatar\`\`\``, value: `Shows the server icon`},
            {name: `\`\`\`server-info\`\`\``, value: `Shows brief details about the server`},
            {name: `\`\`\`regionlist\`\`\``, value: `Shows the choosable regions for the set-region command`}
        )
        .setColor('#2a2d2e');
        const mod3 = new MessageEmbed()
        .setTitle(`\`\`\`Moderation Commands\`\`\``)
        .setColor('#2a2d2e')
        .addFields(
            {name: `\`\`\`weather [city]\`\`\``, value: `Shows the weather of the mentioned city`},
            {name: `\`\`\`wikipedia [search]\`\`\``, value: `Gives results based on your search`}
        )

        const embeds = [mod1, mod2, mod3]

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