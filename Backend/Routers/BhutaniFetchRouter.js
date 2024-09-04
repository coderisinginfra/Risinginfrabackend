const express = require('express')
const BhutaniFetchController = require('../Controllers/BhutaniFetchController')
const router = express.Router()
router.get("/bhutaniproject",BhutaniFetchController)
module.exports = router
