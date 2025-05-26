const ProductModel =  require('../models/productModel')

//function -  business logic
//Get Products API - /api/v1/products
exports.getProducts = async (req,res,next)=>{

    // ProductModel.find({name:'something'})// specfic data
   const products = await ProductModel.find({})// give all data

    res.json({
        success: true,
        products
       // message:'Get products working!'
    })
}

//Get Single Product API - /api/v1/product/:id

exports.getSingleProduct = async(req,res,next)=>{

    console.log(req.params.id,"ID")
    try{
        const product =  await ProductModel.findById(req.params.id);
        res.json({
            success:true,
            product,
            message:'Get Single product working..'
        })
    }catch(error){
        res.status(404).json({
            success:false,
            //message:error.message
            message: 'unable to get product with that ID'
        })
    }
  
}