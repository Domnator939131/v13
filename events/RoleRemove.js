const client = require('../index')
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

client.on('roleDelete', async (role) => {
    
    const verify = db.get(`logschannel.${role.guild.id}.enabled`)
    if(verify === true) {

        const boolean = {
            true: `Yes`,
            false: `No`
        }

        const channelId = db.get(`logschannel.${role.guild.id}.channel`)
        const channel = client.channels.cache.find(r => r.id === channelId)
        const embed = new MessageEmbed
        embed.setTitle(`Role Deleted \`${role.name}\``)
        embed.addFields(
            {name: `Name`, value: `${role.name}`, inline: true},
            {name: `Color`, value: `${role.hexColor}`, inline: true},
            {name: `Mentionable`, value: `${boolean[role.mentionable]}`, inline: true},
            {name: `Position`, value: `${role.position}`, inline: true},
            {name: `Hoisted`, value: `${boolean[role.hoist]}`, inline: true},
            {name: `ID`, value: `${role.id}`, inline: true},

        )
        embed.setColor('#2a2d2e')
        channel.send({embeds:[embed]})

    } else {
        return
    }

})