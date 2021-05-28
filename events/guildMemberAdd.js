module.exports = async (client, member) =>{
	const Discord = require("discord.js");

	const embed = new Discord.MessageEmbed()
	.setTitle(member.user.username + " Bem vindo(a) ao servidor! & Pau No Seu Cu !")
	.setAuthor(client.user.username, client.user.displayAvatarURL())
	.setImage(member.user.avatarURL())
	.setColor('#ffv800')
	.setDescription('Baderna ta liberada, só n pode ofender o coleguinha')
	.setTimestamp(new Date())

	member.guild.channels.cache.get('#bot-commands').send({embed});
}
