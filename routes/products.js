const express = require('express')

const router=express.Router();
const productController= require('../controllers/product_controller');

console.log('router loaded');

router.post('/products',productController.create);
router.get('/products',productController.findAll);
router.delete('/products/:id', productController.delete);
router.post('/products/:id', productController.update);



module.exports=router;