const Product = require('../models/product');


const CreateProductService = (data)=>{
  
   const product = Product.create(data);
   console.log(data);
   return product ;

}
const getProductService = ()=>{
    const product = Product.find();
    return product
}

// get the class with id 
const getProductByIdservice =(id)=>{
    const product =Product.findById({_id: id})
    return product;
}


const updateProductService = (id, data) =>{
    const product = Product.findByIdAndUpdate(
        {_id : id},
        data,
        {new: true, runValidators: true}
    )
    return product;
}


const deletProductService = (id)=>{
    const product =Product.findByIdAndDelete({_id : id})

    return product;

}

module.exports={
  CreateProductService,
  getProductService,
  getProductByIdservice,
  updateProductService,
  deletProductService
}