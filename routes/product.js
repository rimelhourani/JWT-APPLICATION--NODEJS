const {
    createProductController,
    getProductController,
    getProductByIdController,
    updateProductController,
    deleteProductController
}= require('../controllers/product');
const auth = require('../middlewares/auth');
const ProductRouter = require('express').Router();

ProductRouter.route('/').post(createProductController).get(getProductController);

ProductRouter.route('/:id')
.get(getProductByIdController)
.patch(updateProductController)
.delete(deleteProductController)


module.exports=ProductRouter;