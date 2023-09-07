const client = require('../index')
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')
const { messages } = require('discord-fetch-all')
client.on('messageUpdate', async (oldMessage, newMessage) => {

    const verify = db.get(`logschannel.${newMessage.guild.id}.enabled`)
    if(verify === true) {

        const embed = new MessageEmbed
        embed.setTitle(`Message edited by ${newMessage.author.tag}`)
        embed.setDescription(`**Message edited in** <#${newMessage.channel.id}> \n [Go to message](${newMessage.url})`)
        embed.addFields(
            {name: `Old Message`, value: `${oldMessage.content}`},
            {name: `New Message`, value: `${newMessage.content}`},
            {name: `User ID`, value : `${oldMessage.author.id}`}
        )      
        embed.setColor(`#2a2d2e`)
        embed.setFooter(`User ID: ${newMessage.author.id}`)
        embed.setTimestamp()
        const x = db.get(`logschannel.${newMessage.guild.id}.channel`)
        const channel = client.channels.cache.find(r => r.id === x)
        channel.send({embeds:[embed]})

    } else {
        return
    }

})