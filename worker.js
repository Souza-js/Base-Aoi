const { AoiClient } = require("aoi.js");
const fs = require("fs");
const path = require("path");

// Configurações do bot
const config = require("./config.js");

// Inicialização do bot
const client = new AoiClient(config.Bot);

// Função para carregar todos os arquivos JS em subpastas
function loadFiles(bot, dirPath) {
	const folders = fs.readdirSync(dirPath);

	for (const folder of folders) {
		const fullFolderPath = path.join(dirPath, folder);
		if (fs.statSync(fullFolderPath).isDirectory()) {
			const files = fs.readdirSync(fullFolderPath).filter(file => file.endsWith('.js'));

			for (const file of files) {
				const filePath = path.join(fullFolderPath, file);
				require(filePath)(bot);
				// console.log(`✅ Carregado: ${filePath}`); 
			}
		}
	}
}

// Carregar eventos e funções de subpastas
const typesDir = path.join(__dirname, 'src', 'types');
loadFiles(client, typesDir);

// Carregar comandos
client.loadCommands("./src/commands/", true);
