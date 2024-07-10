const express = require('express')
const router = express.Router()
const FetchBlogByIdController =require('../Controllers/FetchBlogByIdController')
router.get("/FetchBlogById/:postTitle",FetchBlogByIdController)
module.exports = router