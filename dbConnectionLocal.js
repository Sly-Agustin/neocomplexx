const database = require('./models/index.js');
const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 3000;

database.sequelize
	.authenticate()
	.then(() => {
		console.log('Autenticación correcta');
	})
	.catch((error) => {
		console.log(error);
	});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
