const client = require('../index')
const {MessageEmbed} = require('discord.js')

client.on('threadCreate', (thread) => {
    try {
        thread.join().then(thread.send(`Joined \`${thread.name}\` successfully`))
    }    catch (err) {
        console.log(err)
    }
})