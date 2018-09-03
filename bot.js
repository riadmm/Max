const Discord = require('discord.js');
const client = new Discord.Client();




    client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا والله فيك');
  }
});
client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('عليكم السلام مين الحلو السكر هذا الي جا');
  }
});
client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم');
  }
});
client.on('message', msg => {
  if (msg.content === 'تسلم') {
    msg.reply('الله يسلمك')
  }
});

client.on('message', msg => {
  if (msg.content === 'تسلم يصحبي') {
    msg.reply('الله يسلمك');
  }
});






const developers = ["394715584421429260"]
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**تم تغيير البلاينق مبرووك**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تم تغيير الواتشينق مبرووك**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تم تغيير اللسننق مبروووك**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**تم تغيير التويتش مبروووك**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});






client.on("message", async message => {
if(message.content.startsWith("-embed")) {
if (message.author.id !== "394715584421429260") return;
let args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.reply("Romz");
message.delete();
var emb = new  Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(args);
message.channel.send(emb)
}
})








client.login(process.env.BOT_TOKEN);

