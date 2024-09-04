const express = require('express')
const CrcGroupFetchController = require('../Controllers/CrcGroupFetchController')
const router = express.Router()
router.get("/crcproject",CrcGroupFetchController)
module.exports = router
