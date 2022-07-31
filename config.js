
const fs = require('fs')
const chalk = require('chalk')

//_________ PREMIUM USER__________//
global.premium = ["6289508503153","6285738639969","6287743875928"]
//__________________________________//
global.thumb = fs.readFileSync('./src/menu.jpg')
global.owner = ["6285738639969","6287743875928"]
global.nameowner = "The Crash",
global.nomorowner = "6289508503153",
global.emojistick = "🤡",
global.namebot = "Crash",
global.cpowner = "© The Crash",
global.emoji = "▸ ",
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    owner: 'You are not the owner of the bot',
    premium: 'You are not the premium user',
    wait: 'tunggu',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
