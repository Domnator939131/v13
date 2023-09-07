const {Client, Message, MessageEmbed} = require('discord.js')
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    BotPerms: ["SEND_MESSAGES"],
    minArgs: 1,
    maxArgs: 1,
    syntax: `v!weather [City]`,
    example: `v!weather new york city`,

    run: async (client, message, args) => {

     const embed2 = new MessageEmbed()
        .setTitle(`Enter the name of a city`)
        .setColor(`#2a2d2e`)
        .setFooter(`Error generated`)
        .setTimestamp();

    const embed1 = new MessageEmbed()
    .setTitle(`Something went wrong. Try again`)
    .setColor('#2a2d2e')
    .setFooter(`Error generated`)
    .setTimestamp()

    if(!args[0]) return message.channel.send({embeds: [embed2]})
  
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
    
    if(err) message.channel.send({embeds: [embed1]});

    if(result.length === 0) {
        const embed = new MessageEmbed()
        .setTitle(`Enter a valid location`)
        .setColor('#2a2d2e')
        .setFooter(`Error generated`)
        .setTimestamp()

        message.channel.send({embeds: [embed]})
        return 
    }

        var current = result[0].current;
        var location = result[0].location;

        const embed = new MessageEmbed()
            .setDescription(`\`\`\`${current.skytext}\`\`\``)
            .setTitle(`\`\`\`Weather for ${current.observationpoint}\`\`\``)
            .setThumbnail(current.imageUrl)
            .setColor("#2a2d2e")
            .addField('**Timezone**', `\`\`\`UTC ${location.timezone}\`\`\``, true)
            .addField('**Temperature**', `\`\`\`${current.temperature} Degrees\`\`\``, true)
            .addField('**Feels Like**', `\`\`\`${current.feelslike} Degrees\`\`\``, true)
            .addField('**Winds**', `\`\`\`${current.winddisplay}\`\`\``, true)
            .addField('**Humidity**', `\`\`\`${current.humidity}%\`\`\``, true)
            .addField('**Degree Type**', `\`\`\`${location.degreetype}\`\`\``, true)
            .addField('**Date**', `\`\`\`${current.date}\`\`\``, true)
            .addField('**Day**', `\`\`\`${current.day}\`\`\``, true)

        message.channel.send({embeds: [embed]})

    });

   }
}
