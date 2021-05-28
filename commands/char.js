exports.run = (client, message) => {
    var char = message.content.substr(6, message.content.length)
    var char = char.replace(/ /g,"%20")
    return message.channel.send(`https://www.novaragnarok.com/ROChargenPHP/character/${char}`)
}