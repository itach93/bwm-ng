const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev')
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalsRoutes = require('./routes/rentals'),
      usersRoutes = require('./routes/users'),
      bookingRoutes = require('./routes/bookings');

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useCreateIndex: true, }).then(() => {
    const fakeDb = new FakeDb();
    // fakeDb.seedDb();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/bookings', bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('I am running');
});