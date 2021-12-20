const express = require("express"); // commonJs
let pjson = require("../package.json");

const router = express.Router();

router.get("/", getHealth);

function getHealth(req, res) {
    let versionMsg = pjson.version;
    let nameMsg = pjson.name;
    response = {
		status: 200,
		version: versionMsg,
		name: nameMsg,
    };
    res.json(response);
}

module.exports = router;
