
const path=require('path');
const rootdir=require('../util/path');//path.js file
const Product=require('../models/product');

exports.getaddproductpage=(req,res,next)=>{
    console.log('In the middleware');
    res.sendFile(path.join(rootdir,'views','add-product.html'));
    
}

exports.postproductpage=(req,res,next)=>{
    console.log(req.body);
    const product=new Product(req.body.title);
    product.save();
    console.log(product);
    res.redirect('/');
}

exports.getproductpage=(req,res,next)=>{
    console.log('In shop middleware');
    Product.fetchAll(products=>{
        console.log(products)
        //res.send(products);
        res.sendFile(path.join(rootdir,'views','shop.html'));
        

    });
    
}

exports.getcontactuspage=(req,res,next)=>{
    console.log("in contact")
    
    res.sendFile(path.join(rootdir,'views','contactus.html'));
}

exports.postsuccesspage=(req,res,next)=>{
    
    res.send('<html><h1>Form Successfully filled</h1></html>');
}