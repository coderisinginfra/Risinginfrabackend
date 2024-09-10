const express = require('express')
const FetchNayaashiyanaController = require('../Controllers/FetchNayaashiyanaController')
const router = express.Router()
router.get("/fetchnayaashiyana",FetchNayaashiyanaController)
module.exports = router