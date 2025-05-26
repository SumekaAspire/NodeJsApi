const express = require('express');
const { getProducts, getSingleProduct } = require('../contollers/productController');
const router = express.Router();// router is a module in expres

//route is a method here
//in get can use callback, it is created in controllers folders, use it
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);


//export default router;
module.exports =router;