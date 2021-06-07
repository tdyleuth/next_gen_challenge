const Photo = require('../models/PhotoModel.ts');

import express, { Request, Response } from 'express';

// Get all Photos
const getAllPhotos = async (req: Request, res: Response) => {
    try {
        const photos: {} = await Photo.find({});
        res.json(photos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

//Get Photo by ID
const getPhotoById = async (req: Request, res: Response) => {
    try {
        const photo = await Photo.findById(req.params.id);
        res.json(photo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

//Delete Photo
const deletePhoto = async (req: Request, res: Response) => {
    await Photo.findOneAndDelete(
        { _id: req.params.id },
        (err: Error, Photo: {}) => {
            if (err) {
                return res.status(400).json({ success: false, error: err });
            }

            if (!Photo) {
                return res
                    .status(404)
                    .json({ success: false, error: 'Photo not found' });
            }

            return res.status(200).json({
                success: true,
                message: 'Photo deleted successfully',
                data: Photo,
            });
        }
    ).catch((err: Error) => console.log(err));
};

//Upload a Photo and store in DB
const createPhoto = (req: Request, res: Response) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Photo',
        });
    }

    const photo = new Photo(body);

    if (!photo) {
        return res.status(400).json({
            success: false,
        });
    }

    photo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: photo._id,
                name: photo.title,
                URL: photo.URL,
                description: photo.description,

                message: 'Photo created!',
            });
        })
        .catch((error: Error) => {
            return res.status(400).json({
                error,
                message: 'Photo not created',
            });
        });
};

//Updates existing Photo from DB using Photo id
const updatePhoto = async (req: Request, res: Response) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    Photo.findOne({ _id: req.params.id }, (err: Error, photo: any) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Video not found!',
            });
        }
        photo.name = body.name;
        photo.URL = body.URL;
        photo.favorite = body.favorite;
        photo.description = body.description;

        photo
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: photo._id,
                    message: 'Photo has been updated!',
                });
            })
            .catch((error: Error) => {
                return res.status(404).json({
                    error,
                    message: 'Photo has not updated!',
                });
            });
    });
};

module.exports = {
    getAllPhotos,
    getPhotoById,
    deletePhoto,
    createPhoto,
    updatePhoto,
};
