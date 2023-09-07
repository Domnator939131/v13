const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: 'set-region',
    aliases: ['setregion', 'setrgn'],
    UserPerms: ["MANAGE_GUILD"],
    BotPerms: ["MANAGE_GUILD"],

    run: async (client, message, args) => {

    let serverRegion = args.slice(0).join(' ')

    const embed = new MessageEmbed
    embed.setTitle(`Please provide what region you want to set this server too. \nUse \`\`\`v!rgnlist\`\`\` for the list of avaible regions`)
    embed.setColor("#2a2d2e")
    embed.setFooter(`Error generated`)
    embed.setTimestamp()

    if(!serverRegion) return message.channel.send({embeds: [embed]});    
    
    var availableRegions = ['bz', 'hk', 'jp', 'rus', 'sng', 'sa', 'syd', 'ind', 'usc', 'use', 'usw', 'uss', 'eur']

    if(availableRegions.includes(serverRegion)) {
      try {
        const serverAliases = {
          'bz' : "brazil",
          'hk' : "hongkong",
           'ind' : "india",
          'jp' : "japan",
           'rus' : "russia",
           'sng' : "singapore",
          'sa' : "southafrica",
           'syd' : "sydney",
           'usc' : "us-central",
           'use' : "us-east",
           'uss' : "us-south",
           'usw' : "us-west",
           'eur' : "europe"
         }
        message.guild.setRegion(serverAliases[serverRegion])
        const embed2 = new MessageEmbed
        embed2.setTitle(`Server region has been changed to \`\`\`${serverAliases[serverRegion]}\`\`\` successfully`) 
        embed2.setColor("#2a2d2e")
        message.channel.send({embeds: [embed2]})
        
      }

      catch(error) {
        const embed3 = new MessageEmbed
        embed3.setTitle(`Something went wrong. Try again`) 
        embed3.setFooter(`Error generated`)
        embed3.setTimestamp()
        embed3.setColor("2a2d2e")
        message.channel.send({embeds: [embed3]})
        console.log(error)
      }
    }

    else {

      const emed = new MessageEmbed
      emed.setTitle(`Please provide a valid region.\n Use \`\`\`v!rgnlist\`\`\` to view all avaible regions`)
      emed.setColor("#2a2d2e")
      emed.setFooter(`Error generated`)
      emed.setTimestamp()
      return message.channel.send({embeds: [emed]})
    }

    }
}