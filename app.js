const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With');
    next();
})

app.get('/', function (req, res) {
    res.status(200).json({ message: 'Hello' })
})

app.get('/one', function (req, res) {
    res.send('Onessss')
})

const mongoUrl = process.env.MONGO_URL;

app.use((req, res) => {
    res.status(404).json({ message: 'Page not found' })
})

mongoose.connect(mongoUrl).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.log(err);
})
