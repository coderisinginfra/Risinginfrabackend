const exprerss = require('express')
const router = exprerss.Router()
const SellYourPropertyFindingController = require('../Controllers/SellYourPropertyFindingController')
router.get("/sellyourproperty",SellYourPropertyFindingController)
module.exports = router