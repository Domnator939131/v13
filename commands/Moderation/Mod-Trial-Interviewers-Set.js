const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')
const remove = require('unique-by-set')

module.exports = {
    name: 'mtis',
    UserPerms: ["ADMINISTRATOR"],

    run: async (client, message, args) => {

        const target = message.mentions.members.first()

        if(!target) {
            const embed = new MessageEmbed
            embed.setTitle(`Please mention a user`)
            embed.setColor("#2a2d2e")
            embed.setFooter(`Error Generated`)
            embed.setTimestamp()
            message.channel.send({embeds:[embed]})
            return
        }

        db.push(`mtis.${message.guild.id}.rvw`, `${target.id}`)

        const hi = await db.get(`mtis.${message.guild.id}.rvw`)
    
        const newarray = remove(hi)

        db.set(`mtis.${message.guild.id}.rvw`, newarray)

        const embed = new MessageEmbed
        embed.setTitle(`\`${target}\` has been set as a reviewer`)
        embed.setColor('#2a2d2e')
        message.channel.send({embeds:[embed]})

   }
}
