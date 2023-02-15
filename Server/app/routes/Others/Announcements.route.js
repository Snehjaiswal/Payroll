
"use strict"

const router = require("express").Router()
const { AddAnnouncements,GetAnnouncements}= require('../../controllers/Other/Announcements.controller')


router.post('/add/announcements',AddAnnouncements)
router.get('/get/announcements',GetAnnouncements)


module.exports = router;

