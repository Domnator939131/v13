const client = require('../index')
const chalk = require('chalk')
client.on('ready', async () => {
  
    
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers `, { type: 'WATCHING' })
    }, 6000); 

    console.log(chalk.blue.bold(`Online`))

	client.user.setStatus("dnd")    
    
})