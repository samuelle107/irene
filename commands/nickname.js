const log = require('loglevel');

module.exports = {
    name: 'nickname',
    description: 'Change your nickname',
    async execute(message, args) {
        const nickname = args.slice(0, 32).join(' ');

        if (nickname) {
            try {
                await message.member.setNickname(nickname);
                message.reply('I have changed your nickname!');
            } catch (error) {
                log.error(error);
                message.reply('아이고! I do not have permission to change your nickname!');
            }
        } else {
            message.reply('아이고! You need to provide a nickname!');
        }
    }
};
