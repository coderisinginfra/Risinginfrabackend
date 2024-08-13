const express = require('express')
const FetchEventController = require('../Controllers/FetchEventController')
const router = express.Router()
router.get("/fetchevents",FetchEventController)
module.exports = router