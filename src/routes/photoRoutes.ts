const express = require('express');
const router = express.Router();
const {
    getAllPhotos,
    getPhotoById,
} = require('../controllers/photoControllers');

//Get all photos from DB
router.get('/', getAllPhotos);

//Get photo by id from db
router.get('/:id', getPhotoById);

module.exports = router;
