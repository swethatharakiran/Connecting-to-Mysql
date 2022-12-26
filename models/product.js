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
                
        //const saved=Product.fetchAll(cb);
        fs.readFile(p,'utf8',(err,data)=>{
            let products=[];
            if(err)()=>{
                console.log(err);
            }
            else{
            //return data;
            products=JSON.parse(data);
            }
            products.push(this);
       
        //saved=JSON.parse(saved);
        //console.log(saved,'abc');
        //saved.push(this);

        fs.writeFile(p,JSON.stringify(products),err=>{
            if(err)()=>{console.log(err)}
            else 
            {
                console.log("write successfull");
            }
        
        });
            
    });  
    }
    static fetchAll(cb){
        fs.readFile(p,'utf8',(err,data)=>{
            if(!err){
                cb(JSON.parse(data));
            }
            cb([]);
        });
    
    }
}