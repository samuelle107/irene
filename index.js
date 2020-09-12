import { Client, Collection } from 'discord.js';
import { config } from 'dotenv';
import { setLevel, info, error as _error } from 'loglevel';
import { readdirSync } from 'fs';
import { ireneTestingChannelId, welcomeChannelId } from './channels.json';

config();
const client = new Client();
const { BOT_TOKEN } = process.env;
const PREFIX = '!';
client.commands = new Collection();
const commandFiles = readdirSync('./commands/').filter((file) => file.endsWith('.js'));

commandFiles.forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
});

setLevel('info');

client.on('ready', () => {
    info('Irene has arrived!');
    client.channels.cache.get(ireneTestingChannelId).send('여보세요');
});

client.on('message', (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) {
        return;
    }

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        const emoji = client.emojis.cache.get('753093112825643079');
        const errorMessage = `아이고! I do not recognize that command! ${emoji}`;

        _error(`${message.member.user.username} tried to use a non-existent command, !${command}`);
        message.reply(errorMessage);
    }
});

client.on('guildMemberAdd', member => {
    const emoji = client.emojis.cache.get('753093093246369832');
    const welcomeMessage = `여보세요, <@${member.id}>! If you are caught leaking the server, you will be banned ${emoji}.`;
    const welcomeLink = 'https://thumbs.gfycat.com/EverySeveralIrishterrier-size_restricted.gif';
    const newMemberRole = member.guild.roles.cache.find((role) => role.name === 'STAN GFRIEND');

    member.guild.channels.cache.get(welcomeChannelId).send(welcomeLink);
    member.guild.channels.cache.get(welcomeChannelId).send(welcomeMessage);
    member.roles.add(newMemberRole);
    info(`Added ${newMemberRole} to ${member.displayName}`);
});

client.login(BOT_TOKEN);
