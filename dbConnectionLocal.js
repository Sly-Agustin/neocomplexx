const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 3000;

const sequelize = new Sequelize('mysql_testeo', 'root', 'asd123', {
    host: 'localhost',
    dialect: 'mysql'
}) //Database name, user, password, local server

const modelo = sequelize.define('empleados', {
    "id": {type:Sequelize.INTEGER, primaryKey:true},
    "nombre": Sequelize.STRING,
    "apellido": Sequelize.STRING,
    "cargo": Sequelize.STRING
})

sequelize.authenticate()
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Couldn't authenticate");
    })

modelo.findAll({attributes:['nombre', 'apellido', 'cargo']})
    .then(empleados => {
        let resultados = JSON.stringify(empleados);
        console.log(resultados);
    })
    .catch(error => {
        console.log(error);
    })

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});