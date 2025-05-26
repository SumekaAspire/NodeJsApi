const express = require('express');
const app =express();
const dotenv = require('dotenv');
const path = require('path') //path module
const connectDatabase = require('./config/connectDatabase')
dotenv.config({path: path.join(__dirname,'config','config.env')})

// routes
const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();


app.use(express.json())// middleware method, takes json from request and sets in body
//prefix url
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`server listening to port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})