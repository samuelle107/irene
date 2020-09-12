module.exports = {
    name: '2ne1',
    description: 'Send a particular 2NE1 GIF',
    execute(message, args) {
        const gif = 'https://media.tenor.com/images/5ac8751e7ea2262851d4d1d3d16d641b/tenor.gif';
        message.channel.send(gif);
    }
};
