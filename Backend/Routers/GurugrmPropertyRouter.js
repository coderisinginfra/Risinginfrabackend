const express = require('express')
const FetchGurugramPropertyController = require('../Controllers/FetchGurugramPropertyController')
const router = express.Router()
router.get("/gurugramproperty",FetchGurugramPropertyController)
module.exports = router