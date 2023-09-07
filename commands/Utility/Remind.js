const {Client, Message, MessageEmbed} = require('discord.js')
const id = require('uuid')
const db = require('quick.db')
const moment = require('moment')

module.exports = {
    name: 'remind',
    UserPerms: ["SEND_MESSAGES"],
    minArgs: 2,
    maxArgs: -1,
    syntax: 'v!remind [time] [reminder]',
    description: '',
    example: '',

    run: async (client, message, args) => {

        const time = args[0].toLowerCase()

        const msgs = args.slice(1).join(" ")

        if(time.includes("seconds") || time.includes("secs") || time.includes("sec") || time.includes("s")) {

            const momentTime1 = moment.utc().toString()

            const momentTime = momentTime1.slice(8, -9)

            const remindTime = time.replace(/\D/g, '')
            
            const hey = db.push(`reminde.${message.author.id}.reminders`, {
                id: id.v4(),
                startTime: momentTime,
                endTime: `${remindTime}s`,
                msg: msgs,
            })

            const embed = new MessageEmbed
            embed.setTitle(`Reminder Set`)
            embed.setDescription(
                `Reminder In: ${remindTime} Seconds \nMessage: ${msgs}`
            )
            embed.setColor("#2a2d2e")
            message.channel.send({embeds:[embed]})

            return
        }

        else if(time.includes("minutes") || time.includes("mins") || time.includes("min") || time.includes("m")) {

            const momentTime1 = moment.utc().toString()

            const momentTime = momentTime1.slice(8, -9)

            const remindTime = time.replace(/\D/g, '')
            
            const hey = db.push(`reminde.${message.author.id}.reminders`, {
                id: id.v4(),
                startTime: momentTime,
                endTime: `${remindTime}m`,
                msg: msgs,
            })

            const embed = new MessageEmbed
            embed.setTitle(`Reminder Set`)
            embed.setDescription(
                `Reminder In: ${remindTime} Minutes \nMessage: ${msgs}`
            )
            embed.setColor("#2a2d2e")
            message.channel.send({embeds:[embed]})

            return

        }

        else if(time.includes("hours") || time.includes("hour") || time.includes("hr") || time.includes("h")) {

            const momentTime1 = moment.utc().toString()

            const momentTime = momentTime1.slice(8, -9)

            const remindTime = time.replace(/\D/g, '')
            
            const hey = db.push(`reminde.${message.author.id}.reminders`, {
                id: id.v4(),
                startTime: momentTime,
                endTime: `${remindTime}h`,
                msg: msgs,
            })

            const embed = new MessageEmbed
            embed.setTitle(`Reminder Set`)
            embed.setDescription(
                `Reminder In: ${remindTime} Hours \nMessage: ${msgs}`
            )
            embed.setColor("#2a2d2e")
            message.channel.send({embeds:[embed]})

            return
        }

        else if(time.includes("days") || time.includes("day") || time.includes("d")) {

            const momentTime1 = moment.utc().toString()

            const momentTime = momentTime1.slice(8, -9)

            const remindTime = time.replace(/\D/g, '')
            
            const hey = db.push(`reminde.${message.author.id}.reminders`, {
                id: id.v4(),
                startTime: momentTime,
                endTime: `${remindTime}d`,
                msg: msgs,
            })

            const embed = new MessageEmbed
            embed.setTitle(`Reminder Set`)
            embed.setDescription(
                `Reminder In: ${remindTime} Days \nMessage: ${msgs}`
            )
            embed.setColor("#2a2d2e")
            message.channel.send({embeds:[embed]})

            return
        }

        else if(time.includes("years") || time.includes("year") || time.includes("yr") || time.includes("y")) {

            const momentTime1 = moment.utc().toString()

            const momentTime = momentTime1.slice(8, -9)

            const remindTime = time.replace(/\D/g, '')
            
            const hey = db.push(`reminde.${message.author.id}.reminders`, {
                id: id.v4(),
                startTime: momentTime,
                endTime: `${remindTime}y`,
                msg: msgs,
            })

            const embed = new MessageEmbed
            embed.setTitle(`Reminder Set`)
            embed.setDescription(
                `Reminder In: ${remindTime} Years \nMessage: ${msgs}`
            )
            embed.setColor("#2a2d2e")
            message.channel.send({embeds:[embed]})
        
        }

        else {

            const input = `${msgs}`

            var regex = new RegExp(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
            const valid = regex.test(input)

            if(valid === true) {

                const momentTime1 = moment.utc().toString()

                const momentTime = momentTime1.slice(8, -9)


                const hey = db.push(`reminde.${message.author.id}.reminders`, {
                    id: id.v4(),
                    startTime: momentTime,
                    endTime: `${input}`,
                    msg:msgs,
                })

                const embed = new MessageEmbed
                embed.setTitle(`Reminder Set`)
                embed.setColor('#2a2d2e')
                embed.setDescription(`Reminder on ${input} \nMessage: ${msgs}`)
                message.channel.send({embeds:[embed]})
                return

            } else if(msgs === `true`) {

                const embed = new MessageEmbed
                embed.setTitle(`Invalid format for time`)
                embed.setColor("#2a2d2e")
                embed.addField
                message.channel.send({embeds:[embed]})
                return

            }

            else {
                
                

            }
       

        }

    }
}