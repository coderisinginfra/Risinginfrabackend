const express = require('express');
const router = express.Router();
const AddProjectController = require('../controllers/AddProjectController');
const upload = require('../Middleware/Multer');

router.post('/addproject', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'floorplan1', maxCount: 1 },
    { name: 'floorplan2', maxCount: 1 },
    { name: 'floorplan3', maxCount: 1 },
    { name: 'galleryimage1', maxCount: 1 },
    { name: 'galleryimage2', maxCount: 1 },
    { name: 'galleryimage3', maxCount: 1 }
]), AddProjectController);

module.exports = router;
