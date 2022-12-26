const express=require('express');
const path=require('path');

const router=express.Router();
//const rootdir=require('../util/path');//path.js file
const productscontroller= require('../controllers/products');


router.get('/add-product',productscontroller.getaddproductpage);

router.post('/add-product',productscontroller.postaddproductpage);
router.post('/product', productscontroller.getproductpage);

module.exports=router;