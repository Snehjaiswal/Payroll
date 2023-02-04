
"use strict"

const router = require("express").Router()
const { AddHoliday,GetHoliday}= require('../../controllers/Holiday/Holiday.Controller')
const { check } = require('express-validator');

router.post('/add/holiday',AddHoliday)
router.get('/get/holiday',GetHoliday)


module.exports = router;

