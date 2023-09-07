const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'delrole',
    aliases: ['remove-role', 'rl', 'removerole'],
    UserPerms: ["MANAGE_ROLES"],
    BotPerms: ["MANAGE_ROLES"],

    run: async (client, message, args) => {
  
        const embed1 = new MessageEmbed
        embed1.setTitle(`Please provide a user to remove the role from`)
        embed1.setColor('#2a2d2e')
  
        const embed2 = new MessageEmbed
        embed2.setTitle(`Please provide a role to be removed from the user`)
        embed2.setColor('#2a2d2e')
    
      let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
      if(!rMember) return message.channel.send({embeds: [embed1]})
      
      let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
      
      if(!role) return message.channel.send({embeds: [embed2]}) 
        
      if(!rMember.roles.cache.has(role.id)) {
        let rolDEL_err = new MessageEmbed()
        .setColor(`#2a2d2e`)
        .setTitle(`\`\`\`${rMember.displayName}\`\`\` does not have the role \`\`\`${role.name}\`\`\``)
        .setFooter(`Error generated`)
        .setTimestamp();
  
        return message.channel.send({embeds: [rolDEL_err]})
      
      } else {
  
        try {
          await rMember.roles.remove(role.id)
        
        let rolDEL = new MessageEmbed
        rolDEL.setColor(`#2a2d2e`)
        rolDEL.setTitle(`\`\`\`${rMember.displayName}\`\`\` has been de-roled of the role \`\`\`${role.name}\`\`\``)
  
        message.channel.send({embeds: [rolDEL]})
        } catch(err) {
          const embed3 = new MessageEmbed
          embed3.setTitle(`That user could not be deroled as they have the same or a higher role than the bot`)
          embed3.setColor("#2a2d2e")
          embed3.setFooter(`Error generated`)
          embed3.setTimestamp()
          console.log(err)
          message.channel.send({embeds: [embed3]})
        }
      
      }
  


    }
}