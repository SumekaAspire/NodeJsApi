const mongoose = require('mongoose');

//inside mongoose, Scheme ia a class, pass object
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    descriptions: String,
    ratings: String,
    images: [  
        // there more than 1 image, using array
        {
          image: String
        },
    ],
    category: String,
    seller: String,
    stock: Number,
    numOfReviews: String,
    createdAt: Date
})

//creating model, (model name(single word), schema name)
const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;