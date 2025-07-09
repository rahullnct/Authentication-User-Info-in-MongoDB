const express=require('express');
const router=express.Router();

const {SignupController}=require('../Controller/SignupController');
router.post('/signup',SignupController);
module.exports=router;