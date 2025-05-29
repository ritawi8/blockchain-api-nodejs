import fs from 'fs';

export default (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'Internal Server Error';

	// Logga fel till fil
	const errorMessage = `[${new Date().toLocaleString()}] ${err.statusCode} ${
		err.status
	} - ${err.message} - ${req.method} ${req.originalUrl}\n`;
	fs.appendFileSync('logs/error.logs', errorMessage);

	res.status(err.statusCode).json({
		success: false,
		status: err.status,
		statusCode: err.statusCode,
		message: err.message,
	});
};
