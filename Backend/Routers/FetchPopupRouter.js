const express = require('express')
const FetchPopupController = require('../Controllers/FetchPopupController')
const router = express.Router()
router.get("/fetchpopup",FetchPopupController)
module.exports = router
