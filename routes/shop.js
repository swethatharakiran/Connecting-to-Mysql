const express=require('express');
const path=require('path');
const router=express.Router();
//const rootdir=require('../util/path');
const productscontroller=require('../controllers/products');

router.get('/',productscontroller.getproductpage);

module.exports=router;