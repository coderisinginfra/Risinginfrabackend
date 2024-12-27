const express = require('express')
const Delhi6Controller = require('../Controllers/Delhi6Controller')
const router = express.Router()
router.get("/delhirajnagar",Delhi6Controller)
module.exports = router
