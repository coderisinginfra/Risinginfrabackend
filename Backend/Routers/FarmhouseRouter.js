const express = require('express')
const router = express.Router()
const FarmhouseController = require('../Controllers/FarmhouseController')
router.post("/farmhouse", FarmhouseController)
module.exports = router;