const path = require('path');

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
        res.json(respuesta);        // res.send también funciona porque seteamos el bodyParser con json...
    }
}