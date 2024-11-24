const express = require('express')
const SurakshaController = require('../Controllers/SurakshaController')
const router = express.Router()
router.post("/suraksha",SurakshaController)
module.exports = router