"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const logger = require('morgan');
const connectDB = require('./config/db.ts');
const photoRoutes = require('./routes/photoRoutes');
const app = express_1.default();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Welcome to the Photo Album API!');
});
/* Middleware */
app.use(cors());
app.use(logger('dev'));
app.use(express_1.default.json());
app.use('/api', photoRoutes);
app.listen(port, () => {
    console.log(`Server is running on Port ${port}!`);
});
connectDB();
