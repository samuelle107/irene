module.exports = {
    name: 'steal',
    description: 'Steal an emote and add it to server',
    async execute(message, args) {
        if (args.length !== 1) {
            message.reply('바보! Do !steal_emote <emote>');

            return;
        }
        try {
            const emoteId = args[0].match(/:([0-9]*)>/i)[1];
            const emoteName = args[0].match(/:(.*):/)[1];
            const emoteLink = `https://cdn.discordapp.com/emojis/${emoteId}`;
            const emote = await message.guild.emojis.create(emoteLink, emoteName);

            message.reply(`I added ${emote}`);
        } catch (error) {
            message.reply('아이고! I could not add that emote!');
        }
    }
};
