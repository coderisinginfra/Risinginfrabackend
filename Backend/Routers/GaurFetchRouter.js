const express = require('express')
const GrourFetchController = require('../Controllers/GrourGroupFetchController')
const router = express.Router()
router.get("/gaurfetch",GrourFetchController)
module.exports = router