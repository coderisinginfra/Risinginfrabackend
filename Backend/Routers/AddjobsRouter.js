const express = require('express')
const addJobsController = require('../Controllers/AddJobsController')
const router = express.Router()
router.post("/careers",addJobsController)
module.exports = router