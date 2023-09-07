const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'server-info',
    aliases: ["serverinfo", "sinfo"],
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args) => {

        const textc = message.guild.channels.cache.size

        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (rolemap.length > 1000) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";

        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        }
        const owner = await message.guild.fetchOwner();

        const embed = new MessageEmbed
        embed.setTitle(`${message.guild.name}`)
        embed.setThumbnail(message.guild.iconURL())
        embed.setColor("#2a2d2e")
        embed.addFields({
            name: `Owner`, value: `\`\`\`${owner}\`\`\``
        },
        {
            name: `Created On`, value: `\`\`\`${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})\`\`\``, inline: true,
        },
        {
            name: `Members `, value: `\`\`\`${message.guild.memberCount} Users\`\`\``, inline: true,
        },
        {
            name: `Bots`, value: `\`\`\`${message.guild.members.cache.filter(member => member.user.bot).size} Bots\`\`\``, inline: true,
        },
        {
            name: `No. of Roles`, value: `\`\`\`${message.guild.roles.cache.size} Roles\`\`\``,inline: true,
        },
        {
            name: `Channels`, value: `\`\`\`${textc} Channels\`\`\``, inline: true,
        },
        {
            name: `Verification Level`, value: `\`\`\`${message.guild.verificationLevel}\`\`\``, inline: true,
        },
        {
            name: `Emojis`, value: `\`\`\`${message.guild.emojis.cache.size} External Emojis\`\`\``, inline: true,
        },
        {
            name: `Roles List`, value: `${rolemap}`
        }
        )
        message.channel.send({embeds: [embed]})

   }
}
