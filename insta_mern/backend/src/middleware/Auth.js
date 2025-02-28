const jwt=require('jsonwebtoken');
const config = require('../config/config');
const userModel = require('../models/user.model');

module.exports.authUser =async (req,res,next)=>{
    const token=req.header['authorization']?.spilt(' ')[1];
    if(!token) return res.status(401).json({message:"first login"})
    const decode=jwt.verify(token, config.JWT);
    const user=userModel.findOne({_id:decode._id}).lean()        

}