//import express from 'express';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./src/config/database')
const auth = require('./src/middleware/authMiddleware');

const app = express();

const hotelRoutes = require('./src/router/hotelRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', 3000);
app.use('/hotels', auth, hotelRoutes);
app.use(morgan('dev'));
app.use(cors());

app.listen(app.get('port'), ()=>{
    console.log('Server on port '+app.get('port'));
})
