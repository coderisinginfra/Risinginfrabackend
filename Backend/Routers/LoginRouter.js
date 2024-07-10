const express = require('express')
const LoginContoller = require('../Controllers/LoginController')
const router=  express.Router()
router.post("/login",LoginContoller)
module.exports = router