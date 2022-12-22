const path=require('path');
const rootdir=require('../util/path');//path.js file

exports.geterror404page=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
}