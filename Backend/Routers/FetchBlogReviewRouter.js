const express = require('express')
const FetchBlogReviewController = require('../Controllers/FetchBlogReviewController')
const router = express.Router()
router.get("/fetchblogreview",FetchBlogReviewController)
module.exports = router