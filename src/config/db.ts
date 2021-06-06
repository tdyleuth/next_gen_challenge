require('dotenv').config();
const db = require('mongoose');

const connectDB = async () => {
    try {
        await db.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connection Success');
    } catch (error) {
        console.error('Mongo connection Failed');
        process.exit(1);
    }
};

module.exports = connectDB;
