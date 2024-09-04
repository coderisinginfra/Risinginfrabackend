const express = require('express')
const FairFoxGroupFetchController = require('../Controllers/FairFoxGroupFetchController')
const router = express.Router()
router.get("/fairfoxproject",FairFoxGroupFetchController)
module.exports = router
