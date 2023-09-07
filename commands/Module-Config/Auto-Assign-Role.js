const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'autoassign',
    aliases: ["auto-assign"],
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["MANAGE_ROLES"],
    minArgs: 1,
    maxArgs: 2,

    run: async (client, message, args) => {

        const role = message.mentions.roles.first()
        if(!role) {
            const embed = new MessageEmbed
            embed.setTitle(`Mention a role to set as the Auto-Assign Role`)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds: [embed]})
            return
        }
        const id = role.id
        const insert = db.set(`autorole.${message.guild.id}.role`, id)
        const embed = new MessageEmbed
        embed.setTitle(`\`@${role.name}\` has been set as the auto-assign role`)
        embed.setColor('#2a2d2e')
        message.channel.send({embeds:[embed]})

   }
}
message.channel.send({embed:[enbeds]}).then( message => {
    message.delete()
})