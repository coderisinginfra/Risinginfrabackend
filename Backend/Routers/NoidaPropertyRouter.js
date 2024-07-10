const express = require('express')
const FetchNoidaPropertyController = require('../Controllers/FetchNoidaPropertyController')
const router = express.Router()
router.get("/noidaproperty",FetchNoidaPropertyController)
module.exports = router