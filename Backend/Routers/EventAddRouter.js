const express = require('express')
const router = express.Router()
const cloudinary = require('../Helpers/Cloudinary')
const upload = require('../Middleware/Multer')
const EventAddController = require('../Controllers/EventAddController')
router.post("/eventadd",upload.single('image'),EventAddController)
module.exports = router