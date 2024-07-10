const express = require('express')
const router = express.Router()
const DeleteBlogController =require('../Controllers/DeleteBlogController')
router.delete("/deleteblog/:id",DeleteBlogController)
module.exports = router