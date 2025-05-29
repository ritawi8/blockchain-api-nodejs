import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Storage {
	#filePath = undefined;

	constructor(folder, filename) {
		this.#filePath = path.join(process.cwd(), folder, filename);
	}

	async readFromFile() {
		try {
			const content = await fs.readFile(this.#filePath, 'utf-8');
			return JSON.parse(content);
		} catch (error) {
			// Om filen inte finns, returnera en tom array
			return [];
		}
	}

	async writeToFile(data) {
		try {
			// Skapa mappen om den inte finns
			await fs.mkdir(path.dirname(this.#filePath), { recursive: true });
			await fs.writeFile(this.#filePath, data, 'utf-8');
		} catch (error) {
			console.error('Error writing to file:', error);
		}
	}
}
