//Credit By HBMods-OFC
const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.AntiCallBot = false // false a i dah chuan, rawn call-tu che automatic a block a ni lovang
global.GroupWcMsg = false // false a i dah chuan welcome message i off ang
global.autoTyping = false // true a i dah chuan i type la a lang ang
global.autoRecord = false // true a i dah chuan Voice record angin i lang ang
global.public = true // false ah i dah chuan nang chauhin i hmang thei ang
global.autoread = true // true a i dah chuan message zawng zawng read vek zelin a awm ang 
global.autoread_status = true // true a i dah chuan auto status view in a awm ang

// SET UP LANGUAGE >>>>>>
global.default_language = true // If you don't want to use the default language, set it to false
global.mtl_language = false // set to true if you want to using multi language
global.bot_language = 'lus' // support language [English, Mizo, Indonesia, Russian, Hindi, Germany, Brazilian ] Please put the language code only 
//______>>>>>>>>>>>>>


//info
global.owner = ['919366105939'] // I phone number in thlak rawh
global.ownernumber = '919366105939' // I phone number in thlak rawh
global.ownername = "Ghibli"// I hming dah tel bawk la
global.location = "India, Mizoram, lawngtlai" // I awmna hmun daha
global.botname = "Ghibli" // I bot hming tur dah la
global.ownerweb = "https://youtube.com/@HBMods_Channel"
global.themeemoji = '🤖'
global.creator = "919366105939@s.whatsapp.net" // @ symbol hmaa number hi i phone number in thlak rawh

global.ownerNumber = ["919366105939@s.whatsapp.net"]// @ symbol hmaa number hi i phone number in thlak rawh
global.prefixc = [''] // Prefix a tana hman theih loh tur symbolise a awm nuala, i bot a work a lo a nih chuan i thlak mai dawn nia
global.sessionName = 'session'

// Sticker Pack Name
global.packname = "Sticker By"
global.author = "Bawihpuia"

//BUTTON INPUT 
global.buttonyt = "SUBSCRIBE"
global.buttonyturl = "https://whatsapp.com/channel/0029VaVIdTQ0wajnsTa9zu0M"
global.buttonig = "Follow Us:)"
global.buttonigurl = "https://whatsapp.com/channel/0029VaVIdTQ0wajnsTa9zu0M"
//_______________________________________________
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
//messages
global.mess = {
    success: '\n*©HBWABot*!', 
    admin: 'He features hi chu admin-te chauh hman thei tur a siam a ni!',
    botAdmin: 'Admin-ah min dah hmasa phawt la chuan ka ti thei ang!',
    owner: 'He features hi a neitu chauh hman thei tura siam a ni!',
    group: 'Hei chu group-ah chauh hman thei tura siam a ni!',
    private: 'Hei chu private chat-ah chauh hman thei tura siam a ni!',
    bot: 'Hei chu kei mah chauh hman thei tur a siam a ni',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
