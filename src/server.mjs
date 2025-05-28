import { app } from './app.mjs';
import Blockchain from './models/Blockchain.mjs';
import blockchainRoutes from './routes/blockchain-routes.mjs';

app.use('/api/blocks/', blockchainRoutes);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () =>
	console.log(
		`Servern är startad på port ${PORT} och kör i läget ${process.env.NODE_ENV}`
	)
);
