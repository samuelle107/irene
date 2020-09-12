const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    description: 'Warn a user',
    execute(message, args) {
        const member = args[0];
        const msg = `아이고. ${member} has been warned!`;
        const msgGif = 'https://pa1.narvii.com/6390/23f1ef0fe7bf3f4c6de3c46cb6b1d8693089d5ad_hq.gif';
        const embed = new Discord.MessageEmbed()
            .setImage(msgGif)
            .setDescription(msg);

        if (member) {
            message.channel.send(embed);
        } else {
            message.channel.send('아이고. You need to include the member');
        }
    }
};
