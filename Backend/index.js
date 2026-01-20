const express = require('express');
const cors = require('cors');
const MongoDB = require('./database');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const newsRoutes = require('./routes/newsState');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

MongoDB();


app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use('/api', newsRoutes);