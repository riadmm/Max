const Discord = require('discord.js');
const client = new Discord.Client();





client.on('ready', () => {
  client.user.setGame('ما ينفع نسكت للطفش','https://www.twitch.tv/peery13%27');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
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
