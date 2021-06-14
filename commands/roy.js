const { MessageAttachment } = require("discord.js")

exports.run = (client, message, attachment) => {

    const roy = new MessageAttachment('/imgsbot/roy.png');

    return message.channel.send(roy);
}