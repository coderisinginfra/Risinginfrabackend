const exprerss = require('express')
const router = exprerss.Router()
const RentingHomePropertyFindingController = require('../Controllers/RentingHomePropertyFindingController')
router.get("/rentresidential",RentingHomePropertyFindingController)
module.exports = router