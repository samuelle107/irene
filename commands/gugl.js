module.exports = {
    name: 'gugl',
    description: 'Google search',
    execute(message, args) {
        const baseUrl = 'https://www.google.com/search?q=';
        const googleQuery = args.join('+');
        message.channel.send(baseUrl + googleQuery);
    },
};
