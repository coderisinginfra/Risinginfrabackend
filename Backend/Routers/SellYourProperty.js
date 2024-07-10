const express = require('express')
const SellYourPropertyController = require('../Controllers/SellYourPropertyController')
const router = express.Router()
router.post("/sellyourproperty",SellYourPropertyController)
module.exports = router