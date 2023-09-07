const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

const {pagination} = require('reconlx')

module.exports = {
    name: 'help',
    UserPerms: ['SEND_MESSAGES'],
    BotPerms: ['SEND_MESSAGES'],
    minArgs:0,
    maxArgs: 3,
    syntax: 'v!help-[category name]',
    nsfw: false,
    description: 'Help Command for the bot',
    example: 'v!help-moderation',
    guildOnly: true,
    ownerOnly: false,


    run: async (client, message, args) => {

        const options = args.slice(1)


        const Helpmenu = new MessageEmbed()
        .setTitle(`\`\`\`Help Menu for V13\`\`\``)
        .setColor('#2a2d2e')
        .setDescription(`Press the buttons to move around the menu \n  \`\`\`v!help [command]\`\`\` for more information about that command \n Select any of the categories below and type \`\`\`v!help-[category]\`\`\``)
        .setThumbnail('https://cdn.discordapp.com/avatars/887347896150814740/206726ad3ce8454c8570e6abf69faf05.png?size=256')
        .addFields(
            {name: `\`\`\`Moderation\`\`\``, value: `Commands useful for mods trying to keep the server healthy`},
            {name: `\`\`\`Information\`\`\``, value: `Commands which provide you with information on various things`},
            {name: `\`\`\`Utility\`\`\``, value: `Useful commands provided by the bot`},
            {name: `\`\`\`Configuration\`\`\``, value: `Commands used to configure the useful features of the bot`}
        ).setTimestamp()
        
           message.channel.send({embeds: [Helpmenu]})   }

        }
        