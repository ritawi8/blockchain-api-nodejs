import Blockchain from '../models/Blockchain.mjs';

const blockChain = new Blockchain();

export const listAllBlocks = (req, res) => {
	res.status(200).json({ success: true, data: blockChain.chain });
};

export const addBlock = (req, res) => {
	const { data } = req.body;
	blockChain.addBlock({ data });
	res
		.status(201)
		.json({ success: true, message: 'Block is added', data: blockChain });
};

export const getBlockByHash = (req, res) => {
	const { hash } = req.params;
	// Hitta blocket med rätt hash
	const block = blockChain.chain.find((block) => block.hash === hash);

	if (!block) {
		return res
			.status(404)
			.json({ success: false, message: 'Blocket finns inte' });
	}

	res.status(200).json({ success: true, data: block });
};
