const exprerss = require('express')
const router = exprerss.Router()
const BuyPlotsPropertyFindingController = require('../Controllers/BuyPlotsPropertyFindingController')
router.get("/buyplots",BuyPlotsPropertyFindingController)
module.exports = router