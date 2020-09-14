module.exports = {
    name: 'spank',
    description: 'Send a random spank gif',
    execute(message, args) {
        const member = args[0];
        const spanks = [
            'https://koreaboo-cdn.storage.googleapis.com/2015/02/2qv483s.gif',
            'https://koreaboo-cdn.storage.googleapis.com/2015/02/ipLRBTgS6ezKi.gif',
            'https://koreaboo-cdn.storage.googleapis.com/2015/02/zea.gif',
            'https://koreaboo-cdn.storage.googleapis.com/2015/02/tumblr_lzismzQsZ31qb196qo2_500.gif',
            'https://koreaboo-cdn.storage.googleapis.com/2015/02/Hyuna-slaps-dat-ass.gif',
            'https://koreaboo-cdn.storage.googleapis.com/2015/02/tumblr_n9ejhuE3po1qi21mno1_500.gif',
            'https://media2.giphy.com/media/ZezDqIMwHiqLm/giphy.gif',
            'https://media0.giphy.com/media/lok9ZhryusiDRbaN8e/giphy.gif',
            'https://tenor.com/view/chris-jericho-trish-stratus-spanking-wwe-wwf-gif-14318603',
            'https://tenor.com/view/trish-stratus-spanking-wwe-wrestling-stephanie-mcmahon-gif-14646610',
            'https://tenor.com/view/bad-beat-spank-punishment-gif-13569259',
            'https://media1.tenor.com/images/963d3fcdc8ea8a05e31bd67b2e3aa213/tenor.gif'
        ];
        const gif = spanks[Math.floor(Math.random() * spanks.length)];

        if (member) {
            message.channel.send(`사랑해, ${member}`);
        }
        message.channel.send(gif);
    }
};
