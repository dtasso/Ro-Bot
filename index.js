const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();

const config = require("./config.json");

client.config = config;


/*
client.on('message', message => {
  let responseObject = {
    "&comandos" : "&droides, &clones, &simulation, &sus, &patentes, &jedi",
    "&droides" : "Malditos droides, vamos destrui-los!",
    "&clones" : "Pela República",
    "&simulations" : "Just Like The Simulattions!",
    "&ferido" : `O soldado ${message.author} está ferido!`,
    "&patetens" : "patent alta bigode gross",
    "&jedi" : "a"
    
  };

  if(responseObject[message.content]){
    message.channel.send(responseObject[message.content]);
    }

})



//heroku error
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
*/

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token)
