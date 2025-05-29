import Blockchain from '../models/Blockchain.mjs';
import Storage from '../utilities/storage.mjs';

const storage = new Storage('data', 'blockchain.json');

// Lista alla block
export const listAllBlocks = async (req, res) => {
	const chain = await storage.readFromFile();
	res.status(200).json({ success: true, data: chain });
};

// Lägg till ett block
export const addBlock = async (req, res) => {
	const { data } = req.body;
	let chain = await storage.readFromFile();
	const blockchain = new Blockchain(chain.length ? chain : undefined);
	blockchain.addBlock({ data });
	await storage.writeToFile(JSON.stringify(blockchain.chain, null, 2));
	res
		.status(201)
		.json({ success: true, message: 'Block is added', data: blockchain.chain });
};

// Hämta block via hash
export const getBlockByHash = async (req, res) => {
	const { hash } = req.params;
	const chain = await storage.readFromFile();
	const block = chain.find((block) => block.hash === hash);

	if (!block) {
		return res
			.status(404)
			.json({ success: false, message: 'Blocket finns inte' });
	}

	res.status(200).json({ success: true, data: block });
};
