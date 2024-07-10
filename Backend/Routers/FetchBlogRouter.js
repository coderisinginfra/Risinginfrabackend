const express = require('express')
const router = express.Router()
const FetchBlogsController = require('../Controllers/FetchBlogsController')
router.get("/fetchblogs",FetchBlogsController)
module.exports = router