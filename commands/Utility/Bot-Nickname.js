const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'bot-nickname',
    aliases: ["botnick", "bot-nick"],
    UserPerms: ["MANAGE_NICKNAMES"],
    BotPerms: ["MANAGE_NICKNAMES"],

    run: async (client, message, args) => {

        if(!args[0]) {
            const embed = new MessageEmbed
            embed.setTitle(`Provide a name to change the bot's nickname too`)
            embed.setColor(`#2a2d2e`)
            embed.setFooter(`Error generated`)
            embed.setTimestamp()

            message.channel.send({embeds: [embed]})
            return
        }

        let nickname = args.slice(0).join(" ");

        if(nickname.length > 31) {
            const embed = new MessageEmbed
            embed.setTitle(`Nickname can't be over 32 characters`)
            embed.setColor(`#2a2d2e`)
            embed.setFooter(`Error generated`)
            embed.setTimestamp()

            message.channel.send({embeds: [embed]})
            return            
        }

        const embed = new MessageEmbed
        embed.setTitle(`Bot's nickaname has been changed to \`\`\`${nickname}\`\`\``)
        embed.setColor("#2a2d2e")

        message.guild.me.setNickname(`${nickname}`)

        message.channel.send({embeds: [embed]})


   }
}
