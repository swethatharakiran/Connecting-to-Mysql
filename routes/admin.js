const express=require('express');
const path=require('path');

const router=express.Router();
const rootdir=require('../util/path');//path.js file


router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.sendFile(path.join(rootdir,'views','add-product.html'));
    
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports=router;