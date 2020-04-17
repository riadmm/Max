const Discord = require('discord.js');
const client = new Discord.Client();



 client.on('message', message => { /// edit ForKa
      if(message.content ===  "قفل") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('شدخل امك تقفل الشات');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('تم قفل الشات  ') ///edit ForKa
 }
});


client.on('message', message => {
      if(message.content === "فتح") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('شدخل ابوك تفتح الشات');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('تم فتح الشات')
 }
}); 






client.login(process.env.BOT_TOKEN);
