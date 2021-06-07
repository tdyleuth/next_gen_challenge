const express = require('express');
const router = express.Router();
const {
    getAllPhotos,
    getPhotoById,
    deletePhoto,
    createPhoto,
    updatePhoto,
} = require('../controllers/photoControllers');

router.get('/', getAllPhotos);
router.get('/:id', getPhotoById);
router.delete('/photo/:id', deletePhoto);
router.post('/photo', createPhoto);
router.put('/photo/:id', updatePhoto);
module.exports = router;
