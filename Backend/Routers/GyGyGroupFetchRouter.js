const express = require('express')
const GyGyGroupFetchController = require('../Controllers/GyGyGroupFetchController')
const router = express.Router()
router.get("/gygyfetch",GyGyGroupFetchController)
module.exports = router