"use strict";
const mongoose = require('mongoose');
const { Schema } = mongoose;
const photoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    URL: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});
const Product = mongoose.model('photo', photoSchema);
module.exports = Product;
