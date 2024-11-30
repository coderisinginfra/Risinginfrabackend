const express = require('express')
const Godrejsector44Controller = require('../Controllers/Godrejsector44Controller')
const router = express.Router()
router.post("/godrejsector44",Godrejsector44Controller)
module.exports = router