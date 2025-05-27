const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel')

//create order - api/v1/order
exports.createOrder=async (req,res,next)=>{
 
//to check it is possible to get the request data
console.log(req.body,'DATA - POSSIBLE TO GET THE REQ DATA')// CHECK WITH THUNDERCLIENT
    
const cartItems = req.body;
//reduce - used to tae a single value from a array, acc - sends previous value
//using callback inside this, paramater - callback, initial value
const amount =Number(cartItems.reduce((acc,item)=>(acc+ item.product.price *item.qty),0)).toFixed(1); 
console.log(amount,'AMOUNT')
const status = 'pending';

//create order - fieldname:value(cartItems:cart_itemsAdded)
const order = await orderModel.create({cartItems,amount,status})

//Updating products stock
cartItems.forEach(async (item) => {
    

    console.log(item.product.stock, "Item data before accessing product.stock");

 const productId = item.product._id.$oid || item.product._id;
 console.log("product id: " , productId)

   const product = await  productModel.findById(productId); //await for databaSE OPERATION
   console.log(product.stock,"product stock : Before process")
   product.stock = product.stock - item.qty;
   await product.save();

   console.log(product.stock,"product stock : After process")

});
res.json({
    success:'true',
    order,
    message:"Order works!"
})
}