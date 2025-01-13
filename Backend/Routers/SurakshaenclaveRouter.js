const express = require('express')
const SurakshaenclaveController = require('../Controllers/SurakshaenclaveController')
const router = express.Router()
router.post("/surakshaenclave",SurakshaenclaveController)
module.exports = router
