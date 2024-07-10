const express = require('express')
const router = express.Router()
const cloudinary = require('../Helpers/Cloudinary')
const upload = require('../Middleware/Multer')
const BlogController = require('../Controllers/BlogController')
router.post("/blogproject",upload.single('image'),BlogController)
module.exports = router