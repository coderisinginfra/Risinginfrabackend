const FetchResumecontroller = require('../Controllers/FetchResumecontoller')
const express = require('express')
const router = express.Router()
router.get("/fetchresume",FetchResumecontroller)
module.exports = router