/* Basic initialization */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes files, at the moment there is only the API route
var apiRequest1=require('./rutas/api/request1');

/* Base Router */
/*var indexRouter = express.Router();
app.use('/', indexRouter);
indexRouter.get('/', function (req, res) {
    res.render('index.ejs', {root: __dirname});
}); /* alternative: app.get('/', function() { ... }) however this alternative is "global" y not modularized */

/* Router for APIs routes, there is just one for the moment, it's convenient to have routes modularized across files instead of having
them in altogether in anonymous functions*/
var apiRouter = express.Router();
app.use('/', apiRouter);
apiRouter.get('/',apiRequest1.request1);

// 404 route
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.status(404).render("404.ejs", { url: fullUrl});
  });

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 