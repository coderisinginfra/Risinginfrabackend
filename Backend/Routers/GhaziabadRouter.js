const express = require('express')
const GhaziabadController = require('../Controllers/GhaziabadController')
const router = express.Router()
router.get("/ghaziabadproperties",GhaziabadController)
module.exports = router