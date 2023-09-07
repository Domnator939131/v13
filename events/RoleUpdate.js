const client = require('../index')
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')

client.on('roleUpdate', async (oldRole, newRole) => {
    
    const verify = db.get(`logschannel.${OldRole.guild.id}.enabled`)
    if(verify === true) {

        const boolean = {
            true: `Yes`,
            false: `No`
        }

        const channelId = db.get(`logschannel.${role.guild.id}.channel`)
        const channel = client.channels.cache.find(r => r.id === channelId)
        const embed = new MessageEmbed
        embed.setTitle(`Role Updated \`${oldRole.name}\``)
        embed.addFields(
            {name: `Old [Name]`, value: `${oldRole.name}`, inline: true},
            {name: `Old [Color]`, value: `${oldRole.hexColor}`, inline: true},
            {name: `Old [Mentionable]`, value: `${boolean[oldRole.mentionable]}`, inline: true},
            {name: `Old [Position]`, value: `${oldRole.position}`, inline: true},
            {name: `Old [Hoisted]`, value: `${boolean[oldRole.hoist]}`, inline: true},
            {name: `Old [ID]`, value: `${oldRole.id}`, inline: true},
            {name: `New [Name]`, value: `${newRole.name}`, inline: true},
            {name: `New [Color]`, value: `${newRole.hexColor}`, inline: true},
            {name: `New [Mentionable]`, value: `${boolean[newRole.mentionable]}`, inline: true},
            {name: `New [Position]`, value: `${newRole.position}`, inline: true},
            {name: `New [Hoisted]`, value: `${boolean[newRole.hoist]}`, inline: true},
            {name: `New [ID]`, value: `${newRole.id}`, inline: true},   
            {name: `New`}         
        )
        embed.setColor('#2a2d2e')
        channel.send({embeds:[embed]})

    } else {
        return
    }

})