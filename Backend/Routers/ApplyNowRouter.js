const express = require('express')
const ApplyNowController = require('../Controllers/ApplyNowController')
const cloudinary = require('../Helpers/Cloudinary')
const upload = require('../Middleware/Multer')
const router = express.Router()
router.post("/applynow",upload.single('image'),ApplyNowController)
module.exports = router