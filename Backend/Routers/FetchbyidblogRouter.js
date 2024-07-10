const express = require('express');
const router = express.Router();
const FetchBlogsbyController = require('../Controllers/FetchBlogsbyController');
router.get("/fetchblog/:id", FetchBlogsbyController);
module.exports = router;
