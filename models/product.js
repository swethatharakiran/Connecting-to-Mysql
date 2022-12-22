//const products=[];
const fs=require('fs');
const path=require('path');
const rootdir=require('../util/path');//path.js file
const p=path.join(rootdir,'data','products.json');

module.exports=class Product{
    constructor(t){
        this.title=t;
    }

    save(){
        
        const product=[]
        product.push(this);
        fs.appendFileSync(p,JSON.stringify(product),err=>{console.log(err)});
            
        //products.push(this);
    }
    static fetchAll(cb){
        fs.readFileSync(p,'utf8',(err,data)=>{
            if(!err){
                cb(JSON.parse(data));
            }
            cb([]);
        });
    
    }
}