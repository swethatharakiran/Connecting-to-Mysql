const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'public')));
const adminroutes=require('./routes/admin');//admin.js
const shoproutes=require('./routes/shop');//shop.js
const contactroutes=require('./routes/contactus');//contactus.js
const successroutes=require('./routes/success');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use('/',shoproutes);
app.use('/contactus',contactroutes);
app.use(successroutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


app.listen(4000);