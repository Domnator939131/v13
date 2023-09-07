const {Client, Message, MessageEmbed} = require('discord.js')

const moment = require('moment')

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};


module.exports = {
    name: 'member-info',
    aliases: ['memberinfo', 'minfo'],
    BotPerms: ["SEND_MESSAGES"],
    syntax: 'v!minfo [user/yourself]',
    minArgs: 0,
    maxArgs: 1,
    example: 'v!minfo @klutz',
    description: 'Used to find user-related info',

    run: async (client, message, args) => {

        try {var roleperms = [];

            var acknowledgements = 'None';
    
            const member = message.mentions.members.first() || message.author
    
            if(member.permissions.has("KICK_MEMBERS")){
                roleperms.push("Kick Members");
            }
            
            if(member.permissions.has("BAN_MEMBERS")){
                roleperms.push("Ban Members");
            }
            
            if(member.permissions.has("ADMINISTRATOR")){
                roleperms.push("Administrator");
            }
        
            if(member.permissions.has("MANAGE_MESSAGES")){
                roleperms.push("Manage Messages");
            }
            
            if(member.permissions.has("MANAGE_CHANNELS")){
                roleperms.push("Manage Channels");
            }
            
            if(member.permissions.has("MENTION_EVERYONE")){
                roleperms.push("Mention Everyone");
            }
        
            if(member.permissions.has("MANAGE_NICKNAMES")){
                roleperms.push("Manage Nicknames");
            }
        
            if(member.permissions.has("MANAGE_ROLES")){
                roleperms.push("Manage Roles");
            }
        
            if(member.permissions.has("MANAGE_WEBHOOKS")){
                roleperms.push("Manage Webhooks");
            }

            if(member.permissions.has("KICK_MEMBERS")) {
                roleperms.push("Kic")
            }
        
            if(roleperms.length == 0){
                roleperms.push("No Key Permissions Found");
            }
        
            if(member.user.id == message.guild.ownerID){
                acknowledgements = 'Server Owner';
            }
    
            if(member.permissions.has("ADMINISTRATOR")) {
                acknowledgements = "Admininstrator"
            }

    
        
            const embed = new MessageEmbed()
                .setAuthor(`${member.user.tag} | Status ~ ${status[member.presence.status]}`, member.user.displayAvatarURL())
                .setColor('#2a2d2e')
                .setThumbnail(member.user.displayAvatarURL())
                .setTimestamp()
                .addField(`\n__Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]__`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
                .addField("\n__Acknowledgements:__ ", `\`\`\`${acknowledgements}\`\`\``, true)
                .addField("\n__Permissions:__ ", `\`\`\`${roleperms.join(` | `)}\`\`\``)
                .addField('__Joined at:__ ',`\`\`\`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\`\`\``)
                .addField('__Created On__', `\`\`\`${member.user.createdAt.toLocaleString()}\`\`\``, true)
                .setColor('#2a2d2e')
                .setFooter(`ID: ${member.id}`)
    
                
            message.channel.send({embeds: [embed]});
        } catch(err) {
             const errorembed = new MessageEmbed
                        errorembed.setTitle(`Use Correct Syntax: \`v!minfo {user}\``)
                        errorembed.setColor("#2a2d2e")
                        message.channel.send({embeds: [errorembed]})
        }

    }
}