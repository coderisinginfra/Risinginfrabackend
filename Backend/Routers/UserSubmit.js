const express = require('express')
const router = express.Router()
const UserSubmitController = require('../Controllers/UserSubmitController')
const UserSubmitValidator = require('../validator/UserSubmitValidator')
router.post("/submit",UserSubmitValidator,UserSubmitController)
module.exports=router;