const express = require('express')
const router = express.Router()
const Popupformcontroller = require('../Controllers/Popupformcontroller')
router.post("/popupform",Popupformcontroller)
module.exports = router