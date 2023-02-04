
"use strict"

const router = require("express").Router()


const { AddEmployee,GetEmployees,GetAllEmployee,Login}= require('../../controllers/Employee/Employee.cotroller')
const { check } = require('express-validator');

router.post('/add',[check('Email').isEmail().normalizeEmail()],AddEmployee)
router.get('/get',GetEmployees)
router.get('/getall',GetAllEmployee)
router.post('/login',Login)



module.exports = router;

