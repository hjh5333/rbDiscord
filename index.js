const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const registerCommands = require('./commands'); // 핸들러 등록

1
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
]});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// 메시지 이벤트 핸들러 연결
client.on('messageCreate', message => registerCommands(message));

client.login(token);