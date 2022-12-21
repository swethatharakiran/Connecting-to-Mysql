const express=require('express');
const path=require('path');
const router=express.Router();
const rootdir=require('../util/path');

router.get('/',(req,res,next)=>{
    console.log("in contact")
    res.sendFile(path.join(rootdir,'views','contactus.html'));
});

module.exports=router;