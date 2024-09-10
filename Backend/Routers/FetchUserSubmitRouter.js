const express = require('express')
const FetchUserSubmitController = require('../Controllers/FetchUserSubmitController')
const router = express.Router()
router.get("/fetchusersubmit",FetchUserSubmitController)
module.exports = router