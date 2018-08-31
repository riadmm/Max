const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
































client.on('ready', () => {
client.user.setGame(`بيني وبينك القاء واحد`,'https://www.twitch.tv/hmamkhalid');                   client.user.setGame(`بوت خيالي`,'https://www.twitch.tv/hmamkhalid');
});
















client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!bc')){
 if(!message.author.id === '406451228004974603') return;
message.channel.sendMessage('جار ارسال الرسالة |?')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




















client.login(process.env.BOT_TOKEN);

