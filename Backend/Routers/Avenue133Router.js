const express = require('express')
const Avenue133 = require('../Controllers/Avenue133')
const router = express.Router()
router.post("/avenue133", Avenue133)
module.exports = router