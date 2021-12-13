const path = require('path');

let response = {};
let pjson = require('../../package.json');

module.exports = { 
    request1: function (req, res) {
        let versionMsg = pjson.version;
        let nameMsg = pjson.name;
        response = {
            status: 200,
            version: versionMsg,
            name: nameMsg
        }
        res.json(response);        // res.send also works
    }
}