const express = require('express')
const ParasGroupFetchController = require('../Controllers/ParasGroupFetchController')
const router = express.Router()
router.get("/parasproject",ParasGroupFetchController)
module.exports = router
