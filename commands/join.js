const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "join",

  description: "Join to Voice Channel",

  execute(message) {

    const { channel } = message.member.voice

    

    if (!channel) return message.reply("Please Join The Voice Channel")

    

    channel.join()
    message.channel.send(`Joined ****${channel.name}****`)

  }

};
