import fs from 'fs';
import path from 'path';

export const logger = (req, res, next) => {
	const message = `${req.method} ${
		req.originalUrl
	} - ${new Date().toLocaleString()}\n`;

	fs.appendFileSync('logs/logs.txt', message);

	console.log(message);

	next();
};
