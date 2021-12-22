const express = require("express");
const db = require("../models");
const router = express.Router();

router.post("/", postEmployee);

function postEmployee(req, res) {

	if (!Object.keys(req.body).length===0) {
		res.status(400).send({
			message: "No attributes in body",
		  	contentOfBody: req.body
		});
		return;
	}

	if (req.body.name==undefined || req.body.lastName==undefined || req.body.position==undefined) {
		res.status(400).send({
		  	message: "No name / last name / position filled",
		});
		return;
	}
	
	db.empleados.create({
		nombre: req.body.name,
		apellido: req.body.lastName,
		cargo: req.body.position,
		createdAt: new Date(),
		updatedAt: new Date()
	})

	return res.status(200).send({
		message: "Employee created successfully"
	})
}

module.exports = router;