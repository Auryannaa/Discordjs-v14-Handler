const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const fs = require("fs");

const { token } = require("./src/settings/config");

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers,
    ], 
    partials: [
        Partials.Channel,
    ] 
});

client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles)
    require(`./src/functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.login(token);