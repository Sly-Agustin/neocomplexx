const expressInit = require('express');
const bodyParser = require('body-parser');
const app = expressInit();
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let respuesta = {};
let pjson = require('./package.json');

function index(req, res){
    res.sendFile('index.html', {root: __dirname});
}

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});
app.get('/api/request1', function (req, res) {
    let versionMsg = pjson.version;
    let nameMsg = pjson.name;
    respuesta = {
        codigo: 200,
        mensaje: 'Request exitosa',
        version: versionMsg,
        name: nameMsg
    }
    res.send(respuesta);
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 