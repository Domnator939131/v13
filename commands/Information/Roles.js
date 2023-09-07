const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'roles',
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args) => {
        
        let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (!rolemap) rolemap = "No roles";

            const embed = new MessageEmbed
            embed.setTitle(`Roles of \`\`\`${message.guild.name}\`\`\``)
            embed.setThumbnail(message.guild.iconURL())
            embed.setColor(`#2a2d2e`)
            embed.addField(`Roles \`\`\`[${message.guild.roles.cache.size}]\`\`\``, `${rolemap}`, true)

        message.channel.send({embeds: [embed]})

   }
}
