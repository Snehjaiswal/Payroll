
"use strict"

const router = require("express").Router()
const {CheckInTime,GetLoginTime,CheckOutTime,GetAllLoginTime} = require('../../controllers/Holiday/Logintime')

router.post('/add/checkin',CheckInTime)
router.post('/add/checkOut',CheckOutTime)

router.post('/find/check',GetLoginTime)
router.post('/find/all_check',GetAllLoginTime)





module.exports = router;

