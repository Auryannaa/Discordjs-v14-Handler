const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync("./src/commands");
        for (const folder of commandFolders) {
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith(".js"));

        const { commands, commandArray } = client;
        for (const file of commandFiles) {
            const command = require(`../../commands/${folder}/${file}`);
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
            console.log(`The command ${command.data.name} was successfully loaded`);
          }
        }

        const clientID = "649229086920540161";
        const guildID = "648569931599839258";

        const rest = new REST({ version: "9"}).setToken(process.env.token);
        try {
            console.log("Started refreshing application / commands");

            await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
                body: client.commandArray,
            });

            console.log("Succesfully reloaded application / commands");
        } catch (e) {
            console.error(e);
        }
    };
};