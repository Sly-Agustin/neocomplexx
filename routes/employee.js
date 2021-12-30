const express = require('express');
const db = require('../models');
const router = express.Router();
const { newEmployee, allEmployees, getEmployeeById } = require('../controllers/employeesController');

router.post('/', newEmployee);
router.get('/all', allEmployees);
router.get('/:id', getEmployeeById);

module.exports = router;
