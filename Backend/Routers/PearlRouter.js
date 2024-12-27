const express = require('express')
const PearlKarolController = require('../Controllers/PearlKarolController')
const router = express.Router()
router.post("/pearlkarol",PearlKarolController)
module.exports = router
