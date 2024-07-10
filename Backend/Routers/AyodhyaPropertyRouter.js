const express = require('express')
const FetchAyodhyaPropertyController = require('../Controllers/FetchAyodhyaPropertyController')
const router = express.Router()
router.get("/ayodhyaproperty",FetchAyodhyaPropertyController)
module.exports = router