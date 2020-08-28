const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor("nei-music Command", `https://cdn.glitch.com/1a3dfe50-5648-4538-9499-d5a39ac7b798%2FIMG_20200720_091304.JPG?v=1595211603132`)
      .setTitle("Command List")
      .setDescription("List of all commands")
      .setColor("#ffffff")
      .setThumbnail(`https://cdn.glitch.com/1a3dfe50-5648-4538-9499-d5a39ac7b798%2FIMG_20200720_091304.JPG?v=1595211603132`);

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        cmd.description,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
