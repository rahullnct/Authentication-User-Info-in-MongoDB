
const signupModel = require('../Model/SignupSchema');

exports.SignupController = async(req,res)=>{
    
    try{
        const {name,email,password,location}=req.body;
        const signup= await signupModel.create({name,email,password,location});
        res.status(200).json({
            success:true,
            signup,
            message:"signup_data is created successfully"           
        });
    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"signup data is not created error!!",
            error:error.message,
        });
    }
};