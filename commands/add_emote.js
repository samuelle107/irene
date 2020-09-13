module.exports = {
    name: 'add_emote',
    description: 'add_emote',
    async execute(message, args) {
        if (args.length !== 2) {
            message.reply('바보! Do !add_emote <link> <name>');

            return;
        }

        try {
            const emoteLink = args[0];
            const emoteName = args[1];
            const emote = await message.guild.emojis.create(emoteLink, emoteName);
            message.reply(`I added ${emote}`);
        } catch (error) {
            message.reply('아이고! I could not add that emote!');
        }
    }
};
