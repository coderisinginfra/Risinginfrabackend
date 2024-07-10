const exprerss = require('express')
const router = exprerss.Router()
const LeaseCommercialPropertyFindingController = require('../Controllers/LeaseCommercialPropertyFindingController')
router.get("/leasecommercial",LeaseCommercialPropertyFindingController)
module.exports = router