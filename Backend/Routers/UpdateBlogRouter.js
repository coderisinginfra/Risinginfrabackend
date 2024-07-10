const express = require('express')
const router = express.Router()
const UpdateBlogController =require('../Controllers/UpdateBlogController')
router.put("/updateblog/:id",UpdateBlogController)
module.exports = router