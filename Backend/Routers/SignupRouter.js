const express = require('express')
const SignUpController = require('../Controllers/SignUpController')
const router=  express.Router()
router.post("/signup",SignUpController)
module.exports = router