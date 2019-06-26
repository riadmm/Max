const Discord = require('discord.js');
const client = new Discord.Client();





client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith('come on')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'Rainbow')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})








client.login(process.env.BOT_TOKEN);
