const express = require('express')
const Delhi6Controller = require('../Controllers/Delhi6Controller')
const router = express.Router()
router.post("/delhirajnagar",Delhi6Controller)
module.exports = router
