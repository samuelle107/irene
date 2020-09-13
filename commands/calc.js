module.exports = {
    name: 'calc',
    description: 'Calucate an equation',
    async execute(message, args) {
        const equation = args.join('').replace(/\s/g, '');

        try {
            // eslint-disable-next-line no-eval
            const result = eval(equation);
            message.reply(`안녕! The result is **${result}**`);
        } catch (error) {
            message.reply('아이고! I cannot calculate that!');
        }
    }
};
