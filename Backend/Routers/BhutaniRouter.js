const express = require('express')
const BhutaniController = require('../Controllers/BhutaniController')
const router = express.Router()
router.post("/bhutanicitycenter32",BhutaniController)
module.exports = router