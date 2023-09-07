const client = require('../index')
const {MessageEmbed, DiscordAPIError} = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const Database = require('better-sqlite3')

client.on('presenceUpdate', async function(oldMember, newMember) {

    const transfer = {
        'online': 'Online',
        'dnd': 'Do Not Disturb',
        'offline': 'Offline',
        'idle': 'Idle'
    }


    db.push(`tracker.change.${newMember.userId}.changes`, `${newMember.user.tag}: ${transfer[newMember.status]} at ${Math.round(new Date().getTime() / 1000).toString()}`)
    const embed = new MessageEmbed
    embed.setTitle(`hey`)
    embed.setDescription(`<t:${Math.round(new Date().getTime() / 1000).toString()}>`)
    const channel = client.channels.cache.find(c=> c.id === '889189475756937216')
    channel.send({embeds:[embed]})

      
    })


message.channel.send(`Hi there how are you, im V13`)
message.channel.send(`nou`)
if(message && message.author.id===!client.user.id){
    console.log(id)
    const get  = db.list.map(=>{
        if(message != get) {
            db.add(`id`)
        } else {
            return
        }
    