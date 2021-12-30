const express = require('express');
require('dotenv').config();

var healthRouter = require('./routes/health');
var employeeRouter = require('./routes/employee');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/health', healthRouter);
app.use('/employees', employeeRouter);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
