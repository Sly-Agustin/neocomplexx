const db = require('../models');

async function newEmployee(req, res) {
	if (!Object.keys(req.body).length === 0) {
		res.status(400).send({
			message: 'No attributes in body',
			contentOfBody: req.body,
		});
		return;
	}

	if (req.body.name == undefined || req.body.lastName == undefined || req.body.position == undefined) {
		res.status(400).send({
			message: 'No name / last name / position filled',
		});
		return;
	}
    console.log(typeof(req.body.name));
	let aux = await db.empleados.create({
		nombre: req.body.name,
		apellidoo: req.body.lastName,
		cargo: req.body.position,
		createdAt: new Date(),
		updatedAt: new Date(),
	});

	return res.status(200).send({
		message: 'Employee created successfully',
	});
}

module.exports={newEmployee}