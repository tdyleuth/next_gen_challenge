import express, { Application, Request, Response } from 'express';
const cors = require('cors');
const logger = require('morgan');
const connectDB = require('./config/db.ts');
const photoRoutes = require('./routes/photoRoutes');
const app: Application = express();
const port = 3000;

/* Middleware */

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/photos', photoRoutes);

app.listen(port, (): void => {
    console.log(`Server is running on Port ${port}!`);
});

connectDB();
