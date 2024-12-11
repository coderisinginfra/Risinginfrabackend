const express = require('express')
const culturalbites = require('../Controllers/CulturalbitesController')
const router = express.Router()
router.post("/culturalbites", culturalbites)
module.exports = router