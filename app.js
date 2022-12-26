const express=require('express');
const path=require('path');
const app=express();
const db=require('./util/database');//database.js

app.use(express.static(path.join(__dirname,'public')));
const adminroutes=require('./routes/admin');//admin.js
const shoproutes=require('./routes/shop');//shop.js
const contactroutes=require('./routes/contactus');//contactus.js
const successroutes=require('./routes/success');
const errorcontroller=require('./controllers/error404');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use('/',shoproutes);
app.use('/contactus',contactroutes);
app.use(successroutes);

app.use(errorcontroller.geterror404page);


app.listen(4000);