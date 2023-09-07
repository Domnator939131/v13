const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'logging-config',
    aliases: ["logconfig"],
    UserPerms: ["ADMINISTRATOR"],
    minArgs: 1,
    maxArgs: 2,
    syntax: `v!logconfig [type of logged event]`,
    description: `Used to configure which type of events are to be logged`,
    example: 'v!logconfig [channelUpdate]',

    run: async (client, message, args) => {

        const option = args.join(' ')
        if(option === 'channelUpdate') {

            const channelUpdate = db.get(`logging.${message.guild.id}.channelUpdate`)

            if(!channelUpdate === true) {
                const x = db.set(`logging.${message.guild.id}.channelUpdate`, true)
                const embed = new MessageEmbed
                embed.setTitle(`\`channelUpdate\` has been toggled and set to \`enabled\``)
                embed.setColor('#2a2d2e')
                message.channel.send({embeds:[embed]})
                return
            }

            const x = db.set(`logging.${message.guild.id}.channelUpdate`, false)
            const embed = new MessageEmbed
            embed.setTitle(`\`channelUpdate\` has been toggled and set to \`disabled\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})

        } else if(option === 'channelCreate') {

            const channelCreate = db.get(`logging.${message.guild.id}.channelCreate`)

            if(!channelCreate === true) {
                const x = db.set(`logging.${message.guild.id}.channelCreate`, true)
                const embed = new MessageEmbed
                embed.setTitle(`\`channelCreate\` has been toggled and set to \`enabled\``)
                embed.setColor('#2a2d2e')
                message.channel.send({embeds:[embed]})
                return
            }

            const x = db.set(`logging.${message.guild.id}.channelCreate`, false)
            const embed = new MessageEmbed
            embed.setTitle(`\`channelCreate\` has been toggled and se to \`disabled\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})

        } else if(option === 'channelDelete') {
            const channelDelete = db.get(`logging.${message.guild.id}.channelDelete`)

            if(!channelDelete === true) {
                const x = db.set(`logging.${message.guild.id}.channelDelete`, true)
                const embed = new MessageEmbed
                embed.setTitle(`\`channelDelete\` has been toggled and set to \`enabled\``)
                embed.setColor('#2a2d2e')
                message.channel.send({embeds:[embed]})
                return
            }

            const x = db.set(`logging.${message.guild.id}.channelDelete`, false)
            const embed = new MessageEmbed
            embed.setTitle(`\`channelDelete\` has been toggled and set to \`disabled\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})

        } else if(option === 'messageUpdate') {

            const messageupdate = db.get(`logging.${message.guild.id}.messageUpdate`)

            if(!messageupdate === true) {
                const x = db.set(`logging.${message.guild.id}`)
                const embed = new MessageEmbed
                embed.setTitle(`\`messageUpdate\` has been toggled and set to \`enabled\``)
                embed.setColor('#2a2d2e')
                message.channel.send({embeds:[embed]})
                return                
            }

            const x = db.set(`logging.${message.guild.id}.messageUpdate`, false)
            const embed = new MessageEmbed
            embed.setTitle(`\`messageUpdate\` has been toggled and set to \`disabled\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})

        } else if(option === 'roleUpdate') {
            
        }

   }
}
