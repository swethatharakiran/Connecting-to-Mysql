const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'shoppingapp',
    password:'tharakiran'
});
module.exports=pool.promise();