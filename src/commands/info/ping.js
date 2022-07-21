const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Return my ping!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({ fetechReply: true });

        await interaction.editReply({ content: `Api Latency: ${client.ws.ping}`});
    }
}