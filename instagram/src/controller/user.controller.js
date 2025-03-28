const mongoose=require('mongoose')
const userModel=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')




module.exports.homeController=(req,res)=>{
    res.send('hey its a home page')
}

module.exports.registerController=async (req,res)=>{
    try{
        const {username, email, password, profileImage}=req.body;
     const salt= await bcrypt.genSalt(10)
     const hash=await bcrypt.hash(password,salt);

     const user=await userModel.create({
        username,
        email,
        password:hash,
        profileImage
        
     })

     const token= jwt.sign({
        _id:user._id,
        email:user.email
     },'sanjana')


     res.cookie('token',token)
     console.log(user)
     res.status(201).json(user)

    }
    catch(err){
        console.log('Error:',err)
        res.status(500).json({error:'internal server error',details: err.message })
         
    } 
}


module.exports.loginController=(req,res)=>{
    try{
        const {email, password}=req.body;

    const user=userModel.findOne({email})
    if(!user) console.log('you must register first');



    const decode=bcrypt.compare(password, user.password)

    if(!decode) console.log('password is incorrect')

        const token= jwt.sign({
            _id:user._id,
            email:user.email
         },'sanjana')
    
    
         res.cookie('token',token)

         res.status(201).json('you are loged in')
    } catch(err){
        console.log('Error:', err)
        res.status(500).json('server error',err.message)
        
    }
}

