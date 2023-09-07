const client = require("../index.js");
const { MessageEmbed } = require("discord.js");
const db = require('quick.db')

client.on("channelUpdate", async (oldChannel, newChannel) => {
  const verify = db.get(`logschannel.${newChannel.guild.id}.enabled`);
  if (verify === true) {
    const channelId = db.get(`logschannel.${oldChannel.guild.id}.channel`);
    const channel = client.channels.cache.find((r) => r.id === channelId);
    const embed1 = new MessageEmbed
    const embed = new MessageEmbed();
    embed.setTitle(`Channel Updated`);
    embed.setColor("#2a2d2e");
    embed1.addFields(
      { name: `New [Name]`, value: `${newChannel.name}` },
      { name: `New [Description]`, value: `${newChannel.topic}` },
      { name: `New [Category]`, value: `${newChannel.parent}` },
      { name: `New [ID]`, value: `${newChannel.id}` }
    );
    embed1.setColor('#2a2d2e')
    embed.addFields(
      {name: `Old [Name`, value: `${oldChannel.name}`},
      {name: `Old [Description]`, value: `${oldChannel.topic}`},
      {name: `Old [Category]`, value: `${oldChannel.parent}`},
      {name: `Old [ID]`, value: `${oldChannel.id}`},
    )

    channel.send({ embeds: [embed1, embed] });
  }
});
