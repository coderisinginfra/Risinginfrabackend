const express = require('express')
const AceGroupFetchController = require('../Controllers/AceGroupFetchController')
const router = express.Router()
router.get("/acegroupfetch",AceGroupFetchController)
module.exports = router