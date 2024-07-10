const express = require('express')
const FetchTeamMember = require('../Controllers/FetchTeamMember')
const router = express.Router()
router.get('/fetchteammember',FetchTeamMember)
module.exports = router