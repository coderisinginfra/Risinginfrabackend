const express = require('express')
const router = express.Router()
const FetchJobCategoryController = require('../Controllers/FetchJobCategoryController')
router.get("/fetchjobcategory",FetchJobCategoryController)
module.exports = router