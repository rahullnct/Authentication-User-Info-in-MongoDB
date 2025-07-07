const mongoose=require('mongoose');
require('dotenv').config();
const Dbconnect=()=>{
 mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Database connected Successfully");
})
.catch((error)=>{
    console.log("some problem is there for connecting database",error);
});
}
module.exports=Dbconnect;