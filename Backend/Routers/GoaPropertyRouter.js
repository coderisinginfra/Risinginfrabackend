const express = require('express')
const FetchGoaPropertyController = require('../Controllers/FetchGoaPropertyController')
const router = express.Router()
router.get("/goaproperty",FetchGoaPropertyController)
module.exports = router