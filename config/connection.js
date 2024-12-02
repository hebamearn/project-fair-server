const mongoose= require('mongoose')
const connection_string=process.env.CONNECTIONSTRING
mangoose.connect(connection_string).then((res)=>{
    console.log("MONGODB ATLAS SUCCESSFULLY WITH PFSERVER");

}).catch(err=>{
    console.log("MONGODB ATLAS connection failed!!");
    console.log(err);
})