const express = require('express')
const FetchJobsController = require('../Controllers/FetchJobsController')
const router = express.Router()
router.get("/fetchcareers",FetchJobsController)
module.exports = router