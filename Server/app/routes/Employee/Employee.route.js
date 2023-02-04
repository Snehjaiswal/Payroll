
"use strict"

const router = require("express").Router()
const { AddEmployee,Login}= require('../../controllers/Employee/Employee.cotroller')
const { check } = require('express-validator');

router.post('/add',[check('Email').isEmail().normalizeEmail()],AddEmployee)
router.post('/login',Login)


module.exports = router;

