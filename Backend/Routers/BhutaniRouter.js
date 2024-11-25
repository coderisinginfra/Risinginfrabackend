const express = require('express')
const BhutaniController = require('../Controllers/BhutaniController')
const router = express.Router()
router.post("/bhutani",BhutaniController)
module.exports = router