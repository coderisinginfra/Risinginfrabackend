const express = require('express')
const FetchProjectController = require('../Controllers/FetchProjectController')
const router = express.Router()
router.get("/fetchlistings",FetchProjectController)
module.exports = router
