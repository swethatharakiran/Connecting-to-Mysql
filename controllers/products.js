
const path=require('path');
const rootdir=require('../util/path');//path.js file
const Product=require('../models/product');

exports.getaddproductpage=(req,res,next)=>{
    console.log('Inside controller getaddprdct');
    res.sendFile(path.join(rootdir,'views','add-product.html'));
    
}

exports.postaddproductpage=(req,res,next)=>{
    console.log(req.body);
    console.log("inside controller postprdctpg")
    const product=new Product(req.body.title);
    product.save();
    console.log(product);
    res.sendFile(path.join(rootdir,'views','add-product.html'));
    //res.redirect('/add-product');
}

exports.getproductpage=(req,res,next)=>{
    console.log('Inside getprdctpage');
    Product.fetchAll(products=>{
        console.log(products)
        //res.send(products);
        res.send(products);
        res.sendFile(path.join(rootdir,'views','shop.html'));
        //return products;

    });
    
}

exports.getcontactuspage=(req,res,next)=>{
    console.log("in contact")
    
    res.sendFile(path.join(rootdir,'views','contactus.html'));
}

exports.postsuccesspage=(req,res,next)=>{
    
    res.send('<html><h1>Form Successfully filled</h1></html>');
}

