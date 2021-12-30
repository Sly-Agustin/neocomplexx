const { type } = require('express/lib/response');
const { check } = require('prettier');
const db = require('../models');

function getAttributesFromRequest(req){
	return { name, lastName, position } =  req.body
}
function validateEmployee(req, res) {
	if (attributesInRequest(req, res) && attributesInRequestDefined(req, res) && checkTypeOfAttributes(req, res)) {
		return true;
	}
	return false;
}
function attributesInRequest(req, res) {
	if (emptyObject(req.body)) {
		res.status(400).send({
			message: 'No attributes in body',
		});
		return false;
	}
	return true;
}

function attributesInRequestDefined(req, res) {
	let {name: name, lastName: lastName, position: position} = getAttributesFromRequest(req);

	if (name == undefined || lastName == undefined || position == undefined) {
		res.status(400).send({
			message: 'No name / last name / position filled',
		});
		return false;
	}
	return true;
}

function checkTypeOfAttributes(req, res) {
	let {name: name, lastName: lastName, position: position} = getAttributesFromRequest(req);

	if (typeof name !== 'string' || typeof lastName !== 'string' || typeof position !== 'string') {
		res.status(400).send({
			message: 'Field content cant be a number, they must be characters',
		});
		return false;
	}
	return true
}

async function newEmployee(req, res) {
	if (!validateEmployee(req, res)) {
		return;
	}

	let {name: name, lastName: lastName, position: position} = getAttributesFromRequest(req);

	try {
		await db.empleados.create({
			nombre: name,
			apellido: lastName,
			cargo: position,
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

function isNumber(posibleId){
	let id = parseInt(posibleId, 10);
	if (isNaN(id)) {
		return false;
	}
	return true;
}
function emptyObject(obj) {
	if (Object.keys(obj).length === 0) {
		return true;
	}
	return false;
}
function isEmployee(obj){
	if (!emptyObject(obj)){
		return true
	}
	return false;
}

async function getEmployeeById(req, res) {
	let id = parseInt(req.params.id, 10);
	if (!isNumber(id)){
		res.status(400).send({
			message: 'IDs must be a number',
		});
		return;
	}

	try {
		let employee = await db.empleados.findAll({ attributes: ['id', 'nombre', 'apellido'], where: { id: req.params.id } });
		if (!isEmployee(employee)) {
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
		});
	}
}

module.exports = { newEmployee, allEmployees, getEmployeeById };
