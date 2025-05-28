import { Router } from 'express';
import {
	addBlock,
	listAllBlocks,
	getBlockByHash,
} from '../controllers/blockchain-controllers.mjs';

const routes = Router();

routes.get('/', listAllBlocks);
routes.post('/mine', addBlock);
routes.get('/hash/:hash', getBlockByHash);

export default routes;
