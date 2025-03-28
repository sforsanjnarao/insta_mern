const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.indexPage=(req,res)=>{
    res.send('Hello World')
}

module.exports.registerPage=async (req,res)=>{
    const {username, password, email} = req.body

    const hash=bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        password:hash,
        email
    })

    const token = jwt.sign({
        _id:user._id,
        email:user.email
    },'sanjana')
   return res.status(200).json({token,user}) 
}

module.exports.loginPage=async (req,res)=>{
    const {email,password}=req.body
    const user=await userModel.findOne({email})

     if(!user){
        return res.status(401).json({error:'Invalid credentials'})
     }
     const match=bcrypt.compare(password,user.password)
     if(!match){
        return res.status(401).json({error:'Invalid credentials'})
     }
     const token=jwt.sign({_id:user._id,email:user.email})

     res.cookie('token',token)
     return res.json({user,token})
}

module.exports.profilePage= (req,res)=>{
    res.json(req.user)
}


