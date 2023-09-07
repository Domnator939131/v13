const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'giverole',
    aliases: ['give-role', 'gl'],
    UserPerms: ["MANAGE_ROLES"],
    BotPerms: ["MANAGE_ROLES"],

    run: async (client, message, args) => {

    const embed1 = new MessageEmbed
    embed1.setTitle(`Please provide a user to add the role to`)
    embed1.setColor('#2a2d2e')
    embed1.setFooter(`Error generated`)
    embed1.setTimestamp()   

    const embed2 = new MessageEmbed
    embed2.setTitle(`Please provide a role to be added to the user`)
    embed2.setColor('#2a2d2e')
    embed2.setFooter(`Error generated`)
    embed2.setTimestamp()   

  let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if(!rMember) return message.channel.send({embeds: [embed1]})
  
  let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
  
  if(!role) return message.channel.send({embeds: [embed2]}) 
  
  if(rMember.roles.cache.has(role.id)) {

    const embed = new MessageEmbed
    embed.setTitle(`\`\`\`${rMember.displayName}\`\`\` already has the role \`\`\`${role.name}\`\`\``)
    embed.setColor('#2a2d2e')
    embed.setFooter(`Error generated`)
    embed.setTimestamp()      
      
    return message.channel.send({embeds: [embed]})
  
  } else {

    try {
    const embed1 = new MessageEmbed
    embed1.setTitle(`\`\`\`${rMember.displayName}\`\`\` has been given the role \`\`\`${role.name}\`\`\``)
    embed1.setColor('#2a2d2e')
      
    await rMember.roles.add(role.id)
    
    message.channel.send({embeds: [embed1]})
    } catch(err) {
      const embed3 = new MessageEmbed
      embed3.setTitle(`That user could not be given a role as they have the same or a higher role than the bot`)
      embed3.setColor("#2a2d2e")
      embed3.setFooter(`Error generated`)
      embed3.setTimestamp()
      console.log(err)
      message.channel.send({embeds: [embed3]})
    }

    }
  }
}