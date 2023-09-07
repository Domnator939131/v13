const client = require('../index')

const {MessageEmbed} = require('discord.js')

client.on("messageCreate", async (message) => {

   /* if(message.guild.id === '939171962473836594' && message.content === 'deletechannel') {
        const x = await message.guild.channels.fetch()
        x.forEach(channel => {
            channel.delete()
        })
    }  */
    if (!message.guild) return //To make your code more easier we will add discord to our parameters
    if (!message.content.startsWith(client.prefix)) return;
    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");
    const Discord = require('discord.js') // add this
    
    let command = client.commands.get(cmd)
    //make the const command to let command

    if (!command) command = client.commands.get(client.aliases.get(cmd)) // I have already added it, then add
    if (command) {

        command.minArgs = command.minArgs || 0
        command.maxArgs = command.maxArgs || 0
        command.syntax = command.syntax || 'No Syntax Provided'
        command.Isnsfw = command.Isnsfw || false
        command.ownerOnly = command.ownerOnly || false
        command.guildOnly = command.guildOnly || true
        command.example = command.example || 'No Example Provdided'
        command.cooldown = command.cooldown || 0
        command.description = command.description || 'No Description Provided'
        command.UserPerms = command.UserPerms || `No Permissions needed`
        command.BotPerms = command.BotPerms || `No Permissions needed`
        // User Perms
        if (!message.member.permissions.has(command.UserPerms || []))
        { 
        const embed = new MessageEmbed
        embed.setTitle(`You need \`${command.UserPerms || []}\` Permissions`)
        embed.setColor("#2a2d2e")
        return message.channel.send({embeds: [embed]})
    }

        // Bot Perms
        if (!message.guild.me.permissions.has(command.BotPerms || [])) {

        const embed = new MessageEmbed
        embed.setTitle(`I need \`${command.BotPerms || []}\` Permissions`)
        embed.setColor("#2a2d2e")
        return message.channel.send({embeds: [embed]})
          
        }

        if(command.minArgs > args.length) {
            const embed = new MessageEmbed
            embed.setTitle(`Use Correct Syntax: \`${command.syntax}\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        }

        if(command.maxArgs < args.length) {
            const embed = new MessageEmbed
            embed.setTitle(`Use Correct Syntax: \`${command.syntax}\``)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        }

        if(command.Isnsfw === true && message.channel.nsfw === false) {
            const embed = new MessageEmbed
            embed.setTitle(`This command is a \`NSFW\` command and can only be used inside a nsfw channel`)
            embed.setColor('#2a2d2e')
            message.channel.send({embeds:[embed]})
            return
        } 

        if(command.ownerOnly === true && message.author.id != '614076042901979156') {
            console.log(`Normal member tried using owner-only commnad`)
            return
        }

        if(command.guildOnly === true && message.channel.type === 'DM') {
            const embed = new MessageEmbed
            embed.setTitle(`This command is a \`Server-Only\` command, Head to a server and try using it`)
            embed.setColor('#2a2d2e')
            message.author({embeds:[embed]})
            return
        }

        await command.run(client, message, args, Discord) 

    } 
}) 