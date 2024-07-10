const express = require('express')
const BlogReviewSubmit = require('../Controllers/BlogReviewSubmit')
const router  = express.Router()
router.post("/postblogreview",BlogReviewSubmit)
module.exports = router