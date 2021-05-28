const Discord = require("discord.js");          //load the Discord.js Library
const client = new Discord.Client();            //make a new Client
const config = require("./config.json");        //load in all of the config files
client.on("ready", ()=>console.log("READY"));   //log when the bot gets ready
const jointocreate = require("./jointocreate"); //load the jointocreate.js file
jointocreate(client);                           //call the jointocreate file
client.login(config.TOKEN);                     //start the bot with the bot token