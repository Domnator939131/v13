const client = require('../index.js')
const db = require('quick.db')
const Canvas = require('canvas')
const {MessageAttachment, RichPresenceAssets} = require('discord.js')
Canvas.registerFont('NotoSans-Regular.ttf', {family: 'Notosans'})

client.on('guildMemberAdd', async (member) => {

    const channel1 = member.guild.channels.cache.find(r => r.id === '780075992819171379') 



    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./wallpaper.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#121110';
    ctx.strokeRect(canvas.width, canvas.height, 20, 20);
    ctx.fillRect(canvas.width, canvas.height, 20, 20);
    ctx.font = '30px "Notosans"';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the Server,', canvas.width / 2.5, canvas.height / 3.5);

    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachmen1t = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    channel1.send({content:`Welcome to the server ${member}`, files: [attachmen1t]});

    try {


    const awat = db.get(`autorole.${member.guild.id}.role`)

    if(!awat) return;
        
    const autorole = member.guild.roles.cache.find(role => role.id === `${awat}`)

    member.roles.add(autorole)
    

    } catch (err) {
        console.log(`something went wrong :(`)
    }
})