const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "join",

  description: "Join to Voice Channel",

  execute(message) {

    const { channel } = message.member.voice

    

    if (!channel) return message.reply("Please Join The Voice Channel")

    

    channel.join().then((connection) => {
      const dispatcher = connection.play("https://cdn.glitch.com/1a3dfe50-5648-4538-9499-d5a39ac7b798%2FDark%20Cloud%20Lite3.mp3?v=1598611285585");
})
    message.channel.send(`Joined ****${channel.name}****`)

  }

};