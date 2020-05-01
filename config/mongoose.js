const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ecommerce');

const db = mongoose.connection;

//  error
db.on('error', console.error.bind(console, 'error in connecting to db'));

// up and running then print thr message
db.once('open', function(){
    console.log('Successfully connected to the database');

});