const express=require('express');
const app=express();
const cors=require('cors');

require("dotenv").config();
const port= process.env.PORT || 4000;
app.use(cors({
    origin:"http://localhost:3001"
}))
app.use(express.json());

const somerouters=require('./Router/Auth');
app.use('/api/v1',somerouters);

const dbconnect=require('./Config/Database');
dbconnect();

app.listen(port,()=>{
    console.log(`yes it is working fine at ${port}`)
});




app.get('/',(req,res)=>{
    res.send(`<h1>this is the main page</h1>`);
});
