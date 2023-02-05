
"use strict"

const router = require("express").Router()

const { AddDepartment, getDepartment,UpdateStatus,deleteDeparment,Dashboard} = require('../../controllers/Department/Department.controller')
// const { check } = require('express-validator');

router.post('/add-department', AddDepartment)
router.post('/update-status', UpdateStatus)
router.post('/delete-deparment', deleteDeparment)
router.get('/get-department', getDepartment)
router.get('/dashboard', Dashboard)






module.exports = router;