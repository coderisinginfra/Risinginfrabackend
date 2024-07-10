const express = require('express')
const router = express.Router()
const cloudinary = require('../Helpers/Cloudinary')
const upload = require('../Middleware/Multer')
const AddTeamMemberController = require('../Controllers/AddTeamMemberController')
router.post("/addteammember",upload.single('image'),AddTeamMemberController)
module.exports = router