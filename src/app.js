const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/weather', require('./routes/weather'));
app.use('/weather-city', require('./routes/weathercity'));


module.exports = app;
