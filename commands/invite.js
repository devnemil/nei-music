const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Invite this bot to your server",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor("Invite nei-music", `https://cdn.glitch.com/1a3dfe50-5648-4538-9499-d5a39ac7b798%2FIMG_20200720_091304.JPG?v=1595211603132`)
      .setTitle("Invite me to your server")
      .setDescription("[Click Here](https://nei-music.glitch.me)")
      .setColor("#ffffff")
      .setThumbnail(`https://cdn.glitch.com/1a3dfe50-5648-4538-9499-d5a39ac7b798%2FIMG_20200720_091304.JPG?v=1595211603132`);

  
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
