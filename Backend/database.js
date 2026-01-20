const mongoose = require('mongoose');
// const config = require('./config');
require('dotenv').config()
const uri = process.env.MONGO_URI

const MongoDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = MongoDB;