
"use strict"

const router = require("express").Router()

const { AddDepartment, getDepartment } = require('../../controllers/Department/Department.controller')
const { check } = require('express-validator');

router.post('/add-department', AddDepartment)
router.get('/get-department', getDepartment)





module.exports = router;