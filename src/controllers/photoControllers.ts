const { Photo } = require('../models/Photo');

import express, { Request, Response } from 'express';

const getAllPhotos = async (req: Request, res: Response) => {
    try {
        const products = await Photo.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getPhotoById = async (req: Request, res: Response) => {
    try {
        const product = await Photo.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllPhotos,
    getPhotoById,
};
