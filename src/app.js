const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

//Routes yang dibuat
app.use('/weather', require('./routes/weather'));
app.use('/weather-city', require('./routes/weathercity'));
app.use('/articles', require('./routes/articleRoutes'));
app.use('/users', require('./routes/userRoutes'));
app.use('/chatbot', require('./routes/chatbot')); 

module.exports = app;
