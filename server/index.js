const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev')
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalsRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalsRoutes);
app.use('/api/v1/users', usersRoutes);

const PORT = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('I am running');
});