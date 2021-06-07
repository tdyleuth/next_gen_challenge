const PhotoModel = require('../models/Photo.ts');

import express, { Request, Response } from 'express';

const getAllPhotos = async (req: Request, res: Response) => {
    try {
        const photos = await PhotoModel.find({});
        res.json(photos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getPhotoById = async (req: Request, res: Response) => {
    try {
        const photo = await PhotoModel.findById(req.params.id);
        res.json(photo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllPhotos,
    getPhotoById,
};
