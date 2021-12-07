/* Requerimientos básicos para correr la aplicación */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Archivos donde se encuentran las rutas, en este caso solo tenemos la de la API.
var apiRequest1=require('./rutas/api/request1');

/* Router para las direcciones base */
var indexRouter = express.Router();
app.use('/', indexRouter);
indexRouter.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
}); /* alternativa: app.get('/', function() { ... }) pero esta alternativa es "global" y no modularizada */

/* Router para las rutas de la API, actualmente se tiene una sola, hacer esto y tener modularizadas las rutas en distintos archivos
es conveniente a tener todas las rutas con funciones anónimas juntas */
var apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.get('/request1',apiRequest1.request1);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 