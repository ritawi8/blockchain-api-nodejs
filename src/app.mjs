import express from 'express';
import dotenv from 'dotenv';
import { logger } from './utilities/logger.mjs';
import errorHandler from './middleware/errorHandler.mjs';

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

app.use(logger);

// Hantera 404-fel (endpoint finns inte)
app.use((req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	error.statusCode = 404;
	next(error); // Skicka vidare till error handlern
});

app.use(errorHandler);

export { app };
