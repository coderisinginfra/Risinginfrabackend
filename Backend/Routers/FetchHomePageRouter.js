const express = require('express')
const FetchHomePageData = require('../Controllers/FetchHomePageData')
const router = express.Router()
router.get("/fetchhomedata",FetchHomePageData)
module.exports = router