require('dotenv').config();
const photoData = require('./data/photoData.ts');
const Photo = require('./models/PhotoModel.ts');
const DB = require('./config/db.ts');

DB();

//Import Product data into MondoDB
const importData = async () => {
    try {
        await Photo.deleteMany({});
        await Photo.insertMany(photoData);
        console.log('Data Import Success!');
        process.exit();
    } catch (error) {
        console.error('Data Import Failed', error);
        process.exit(1);
    }
};
importData();
