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

	if ((typeof(req.body.name) !== 'string') || (typeof(req.body.lastName) !== 'string') || (typeof(req.body.position) !== 'string')){
		res.status(400).send({
			message: 'Field content cant be a number, they must be characters',
		});
		return;
	}

	try {
		let aux = await db.empleados.create({
			nombre: req.body.name,
			apellido: req.body.lastName,
			cargo: req.body.position,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	}
	catch(err) {
		if (err.parent.code == "ER_NO_DEFAULT_FOR_FIELD"){
			res.status(400).send({
				message: 'Not all fields have been filled.',
				errorMessage: err.parent.sqlMessage
			});
		}
		res.status(400).send({
			message: 'An error has ocurred',
			messageError: err.parent.sqlMessage,
		});
	}

	return res.status(200).send({
		message: 'Employee created successfully',
	});
}

module.exports={newEmployee}