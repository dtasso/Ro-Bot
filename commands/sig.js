exports.run = (client, message) => {
	   var sig = message.content.substr(5, message.content.length);
	   var sig = sig.replace(/ /g,"%20")
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
		'11',
		'12',
		'13',
		'14',
		'15'
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
	   var rbg = lbg[Math.floor(Math.random() * lp.length)];
	   var rp = lp[Math.floor(Math.random() * lp.length)];
	   return message.channel.send(`https://www.novaragnarok.com/ROChargenPHP/newsig/${sig}/`+rbg+`/`+rp)
  }