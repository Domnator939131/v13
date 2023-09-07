const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'role-info',
    aliases: ["roleinfo","rinfo"],
    UserPerms: ["MANAGE_MESSAGES"],
    BotPerms: ["SEND_MESSAGES"],

    run: async (client, message, args) => {

        const embed = new MessageEmbed
        embed.setTitle(`Mention a role to get the information for it`)
        embed.setColor(`#2a2d2e`)
        embed.setFooter(`Error generated`)
        embed.setTimestamp()

        const embed1 = new MessageEmbed
        embed1.setTitle(`That is not a valid role`)
        embed1.setColor(`#2a2d2e`)
        embed1.setFooter(`Error generated`)
        embed1.setTimestamp()

        if (!args[0]) return message.channel.send({embeds: [embed]})
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send({embeds: [embed1]});

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("#2a2d2e")
            .setTitle(`Role Info About \`\`\`${args[0]}\`\`\``)
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`\`\`${role.id}\`\`\``, true)
            .addField("**Name**", `\`\`\`${role.name}\`\`\``, true)
            .addField("**Members**", `\`\`\`${role.members.size}\`\`\``, true)
            .addField("**Hex Color**", `\`\`\`${role.hexColor}\`\`\``, true)
            
            .addField("**Mentionable**", `\`\`\`${status[role.mentionable]}\`\`\``, true)
           
            .addField("**Position**", `\`\`\`${role.position}\`\`\``, true)
           
            .setFooter(`Generated For ${message.author.username} | Role Created At`)
            .setTimestamp(`${role.createdAt}`)

        message.channel.send({embeds: [roleembed]});

   }
}
