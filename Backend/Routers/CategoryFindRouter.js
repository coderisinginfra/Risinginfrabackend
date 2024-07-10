const express = require('express')
const CategoryFindController = require('../Controllers/CategoryFindController')
const router = express.Router()
router.get("/categoryfind",CategoryFindController)
module.exports = router