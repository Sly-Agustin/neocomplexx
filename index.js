const express = require("express");

var healthRouter = require("./routes/health");
var employeeRouter = require("./routes/employee");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/health", healthRouter);
app.use("/newEmployee", employeeRouter);

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
