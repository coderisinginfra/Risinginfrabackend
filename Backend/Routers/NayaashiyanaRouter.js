const express = require('express')
const NayaashiyanaController = require('../Controllers/NayaashiyanaController')
const router = express.Router()
router.post("/nayashiyanaforms",NayaashiyanaController)
module.exports = router