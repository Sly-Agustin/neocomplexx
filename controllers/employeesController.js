const { type } = require('express/lib/response');
const db = require('../models');

function getAttributesFromRequest(req){
	return {
		name: req.body.name,
		lastName: req.body.lastName,
		position: req.body.position
	}
}

async function newEmployee(req, res) {
	if (!Object.keys(req.body).length === 0) {
		res.status(400).send({
			message: 'No attributes in body',
			contentOfBody: req.body,
		});
		return;
	}

	let {name: name, lastName: lastName, position: position} = getAttributesFromRequest(req);

	if (name == undefined || lastName == undefined || position == undefined) {
		res.status(400).send({
			message: 'No name / last name / position filled',
		});
		return;
	}

	if (typeof name !== 'string' || typeof lastName !== 'string' || typeof position !== 'string') {
		res.status(400).send({
			message: 'Field content cant be a number, they must be characters',
		});
		return;
	}

	try {
		let aux = await db.empleados.create({
			nombre: name,
			apellido: lastName,
			cargo: position,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
	} catch (err) {
		if (err.parent.code == 'ER_NO_DEFAULT_FOR_FIELD') {
			res.status(400).send({
				message: 'Not all fields have been filled.',
				errorMessage: err.parent.sqlMessage,
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

async function allEmployees(req, res) {
	let employees = await db.empleados.findAll({ attributes: ['id', 'nombre', 'apellido'] });
	if (Object.keys(employees).length === 0) {
		res.status(200).send({
			message: 'There are no employees',
		});
	}
	res.status(200).send({
		employees: employees,
	});
}

async function getEmployeeById(req, res) {
	let id = parseInt(req.params.id, 10);
	if (isNaN(id)) {
		res.status(400).send({
			message: 'IDs must be a number',
		});
		return;
	}

	try {
		let employee = await db.empleados.findAll({ attributes: ['id', 'nombre', 'apellido'], where: { id: req.params.id } });
		if (Object.keys(employee).length === 0) {
			res.status(200).send({
				message: 'There is no employee associated to ID: ' + req.params.id,
			});
			return;
		}

		res.status(200).send({
			employee: employee[0],
		});
	} catch (err) {
		res.status(400).send({
			message: 'An error has ocurred',
			messageError: err.parent.sqlMessage,
		});
	}
}

module.exports = { newEmployee, allEmployees, getEmployeeById };
