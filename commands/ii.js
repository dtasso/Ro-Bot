exports.run = (client, message, snekfetch) => {
  // var id - item
  var ii = message.content.substr(4, message.content.length)
  // retornando o item
  return message.channel.send(`https://www.divine-pride.net/database/Item/${ii}?`)

  //var json = JSON.parse(message.join(`https://www.divine-pride.net/api/database/Item/${ii}?apiKey=7ff6669266353e09303bd1a46f0df150&server=iro`))
  // retornando a data

}
