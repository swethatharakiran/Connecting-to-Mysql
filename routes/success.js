const express=require('express');
const path=require('path');
const router=express.Router();
const rootdir=require('../util/path');

router.post('/success',(req,res,next)=>{
    
    res.send('<html><h1>Form Successfully filled</h1></html>');
});

module.exports=router;