const exprerss = require('express')
const router = exprerss.Router()
const CommercialPropertyFindingController = require('../Controllers/CommercialPropertyFindingController')
router.get("/findcommercial",CommercialPropertyFindingController)
module.exports = router