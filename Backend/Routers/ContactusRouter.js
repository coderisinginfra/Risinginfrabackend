const express = require('express')
const router = express.Router()
const Contactcontroller = require('../Controllers/Contactcontroller')
router.post("/contactus",Contactcontroller)
module.exports = router