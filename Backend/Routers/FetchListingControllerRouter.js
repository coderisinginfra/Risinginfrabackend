const express = require('express')
const FetchListingsController = require('../Controllers/FetchListingsController')
const router = express.Router()
router.get("/fetchalllistings/:propertyTitle",FetchListingsController)
module.exports = router