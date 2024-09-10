const express = require('express')
const FetchContactDetailes = require('../Controllers/FetchContactDetailes')
const router = express.Router()
router.get("/fetchcontact",FetchContactDetailes)
module.exports = router