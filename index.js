const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var apiRequest1=require('./rutas/api/request1');

function index(req, res){
    res.sendFile('index.html', {root: __dirname});
}

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

var apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.get('/request1',apiRequest1.request1);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 