const express = require('express');
const path = require('path');
const port = 1000;


const app = express();

const db=require('./config/mongoose');

// create entries in the database
const Product = require('./models/product')

app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.json({"message": "Welcome to Ecommerce admin pannel."});
});
app.use('/', require('./routes/products.js'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});