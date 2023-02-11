
"use strict"

const router = require("express").Router()


const { AddEmployee,GetAllEmployee,GetEmployee,Login}= require('../../controllers/Employee/Employee.cotroller')
const { check } = require('express-validator');

router.post('/add',[check('Email').isEmail().normalizeEmail()],AddEmployee)

router.get('/getall',GetAllEmployee)

router.get('/emp/:id',GetEmployee)

router.post('/login',Login)





module.exports = router;

