var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let respuesta = {};
let pjson = require('../../package.json');

module.exports = { 
    request1: function (req, res) {
        let versionMsg = pjson.version;
        let nameMsg = pjson.name;
        respuesta = {
            codigo: 200,
            mensaje: 'Request exitosa',
            version: versionMsg,
            name: nameMsg
        }
        res.send(respuesta);
    }
}