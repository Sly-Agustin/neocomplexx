const express = require('express');
const db = require('../models');
const router = express.Router();
const { newEmployee } = require('../controllers/employeesController')

router.post('/', newEmployee);

module.exports = router;
