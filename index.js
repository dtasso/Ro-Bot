//login
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.login(config.BOT_TOKEN);

//Bem-vindo
client.on("guildMemberAdd", member => {
  member.send('Seja bem vindo & Pau no seu CU!')
})

//SIG

client.on ('message', function(message) {
  if (message.author.bot) return;
  if (message.content.startsWith(config.prefix+'sig'))

  var lbg = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11'
  ];
  var lp = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13'
  ];
  var rbg = lbg[Math.floor(math.random() * lp.length)];
  var rp = lp[Math.floor(Math.random() * lp.length)];
  message.reply('https://www.novaragnarok.com/ROChargenPHP/newsig/Tuezin/'+sig+'/'+rp+'/'+rbg)
})
