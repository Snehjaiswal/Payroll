
"use strict"

const router = require("express").Router()
const { AddEmployee, aggre, GetEmployee } = require('../../controllers/Employee/Employee.cotroller')
const { check } = require('express-validator');

router.post('/add', [check('Email').isEmail().normalizeEmail()], AddEmployee)
router.get('/get-all', GetEmployee)
module.exports = router;

