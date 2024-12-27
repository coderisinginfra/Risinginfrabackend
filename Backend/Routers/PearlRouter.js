const express = require('express')
const PearlKarolController = require('../Controllers/PearlKarolController')
const router = express.Router()
router.get("/pearlkarol",PearlKarolController)
module.exports = router
