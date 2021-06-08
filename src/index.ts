import express, { Application, Request, Response } from 'express';
const cors = require('cors');
const logger = require('morgan');
const connectDB = require('./config/db.ts');
const photoRoutes = require('./routes/photoRoutes');
const app: Application = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Photo Album API!');
});

/* Middleware */

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api', photoRoutes);

app.listen(port, (): void => {
    console.log(`Server is running on Port ${port}!`);
});

connectDB();
