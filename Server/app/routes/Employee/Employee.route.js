
"use strict"

const router = require("express").Router()
const { AddEmployee}= require('../../controllers/Employee/Employee.cotroller')
const { check } = require('express-validator');

router.post('/add',[check('Email').isEmail().normalizeEmail()],AddEmployee)

module.exports = router;

