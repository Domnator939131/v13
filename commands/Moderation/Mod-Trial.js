const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')
const { MessageCollector } = require('discord-collector')

module.exports = {
    name: 'modtrial',
    aliases: ["mod-trial"],

    run: async (client, message, args) => {

        const guildId = message.guild.id

        const choose = db.get(`mtis.${guildId}.rvw`)  
        

        message.author.send(`Choose any of the following users, Then enter their name the same way displayed into the chat`)

        choose.forEach(element => {
         const Users = client.users.cache.find(user => user.id === `${element}`)
            message.author.send(`${Users.username}#${Users.discriminator}`)       
        });

        const botMessage = await message.author.send("Send it in the same way as it is written, Example: \`klutz#3943\`")
        const userMessage = await MessageCollector.asyncQuestion({
            botMessage,
            user: message.author.id
        })
        if(userMessage.content === 'ping') {

            await message.channel.send('pong')

        }

        

   }
}
