const exprerss = require('express')
const router = exprerss.Router()
const ResidentialPropertyFindingController = require('../Controllers/ResidentialPropertyFindingController')
router.get("/findresidential",ResidentialPropertyFindingController)
module.exports = router