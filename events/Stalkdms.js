const client = require('../index.js')
const chalk = require('chalk')

client.on('messageCreate', async (message) => {

    if(message.channel.type=='DM' && message.author.id === '550994878486544384') {

        const channel = client.channels.cache.find(c => c.id === '940306690203590716')

        channel.send(`VolatileOsu: ${message.content}`)

    }    

    if(message.channel.id === '940306690203590716') {

        if(message.author.id === client.user.id) return

        const vola = message.guild.members.cache.find(m => m.id === '550994878486544384')

        vola.send(`${message.author.username}: ${message.content}`)


    }

    if(message.channel.type=='DM' && message.author.id === '930680380032417873') {

        const channel = client.channels.cache.find(c => c.id === '940309938520064060')

        channel.send(`OceanicJssoce: ${message.content}`)

    }    

    if(message.channel.id === '940306690203590716') {

        if(message.author.id === client.user.id) return

        const kax = message.guild.members.cache.find(m => m.id === '930680380032417873')

        kax.send(`${message.author.username}: ${message.content}`)


    }

})