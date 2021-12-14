const express = require("express");

var healthRouter = require("./routes/health");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/health", healthRouter);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
