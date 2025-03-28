const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerController=async (req,res)=>{
const {username, email, password} = req.body;

const hash= await bcrypt.hash(password,10)

const user= await userModel.create({username, email, password:hash});

const token=jwt.sign({id:user._id,email:user.email},'sanjana')
res.cookie('token',token)

res.status(200).send('we are done with register')

}

module.exports.loginController=async (req,res)=>{
     const { email,password}=req.body
     const user=await userModel.findOne({email})
     if(!user) res.status(404).send('user not found')
        const match=bcrypt.compare(password,user.password)
    if(!match) res.status(404).send('invalid password')
        const token= jwt.sign({id:user._id, email:user.email})
    res.cookie('token',token)
    res.status(200).send('')
}