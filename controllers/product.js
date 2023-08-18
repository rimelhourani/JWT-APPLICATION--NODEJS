const {
  CreateProductService,
  getProductService,
  getProductByIdservice,
  updateProductService,
  deletProductService
    
  } = require('../services/product');
  const CustomError = require('../shared-services/errors');
  
  const { StatusCodes } = require('http-status-codes');
  
  const createProductController = async (req, res) => {
    const { title,price,description,image,category} = req.body;
  
    const product = await CreateProductService({ title,price,description,image,category });
    res.status(StatusCodes.CREATED).send("product crated");
    res.status(StatusCodes.OK).send(product)
  }
  const getProductController =async(req,res)=>{
   
    const product = await getProductService()

  res.status(StatusCodes.OK).send(product);
 }

  

  const getProductByIdController = async (req, res) => {
    const id = req.params.id;
   
    const product = await getProductByIdservice(id);
  
    res.status(StatusCodes.OK).send(product);
  };
  
  
  const updateProductController = async (req, res) => {
    const {
      body: { title,price,description,image,category},
      params: { id: id },
    } = req;
    
    const product = await updateProductService(id, { title,price,description,image,category });
  
    // res.status(StatusCodes.OK).send('Product updated successfully !');
    res.status(StatusCodes.OK).send(product)
  };
  
  const deleteProductController = async (req, res) => {
    const id = req.params.id;
    const Product_to_delete = await deletProductService(id);
    res.status(StatusCodes.OK).send('Product deleted successfully !');
  };
  
  module.exports = {
createProductController,
getProductController,
getProductByIdController,
updateProductController,
deleteProductController
  };
