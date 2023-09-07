const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    run: async (client, message, args) => {

        const embed = new MessageEmbed()

        .setTitle(`Latency is \`\`\`${Date.now() - message.createdTimestamp}\`\`\` ms. API Latency is \`\`\`${Math.round(client.ws.ping)}\`\`\` ms`)
        .setFooter(`Generated for ${message.author.tag}`)
        .setColor("#2a2d2e")
        .setTimestamp()

        message.channel.send({embeds:[embed]})
     
    }
} 