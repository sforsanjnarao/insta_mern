const userModel=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

module.exports.createController=(req,res)=>{
    const {username,email,password,age}=req.body
    bcrypt.genSalt(10,(err, salt)=>{
         bcrypt.hash  (password, salt, async (err,hash)=>{
        const createUser=await userModel.create({
            username,
            email,
            password: hash,
            age
        })

        const token=jwt.sign({email},'sanjana')
        res.cookie('token',token)
        // console.log(req.cookie)
        console.log(createUser)
        res.send(createUser)
    })
    
    })

    
    
}

module.exports.loginGetController=(req,res)=>{
    res.render('login')
}

module.exports.loginController=(req,res)=>{
    const {email,password}=req.body;
    const userEmail=userModel.findOne({email})
    if(!userEmail) console.log('register first')
    
    bcrypt.compare(password,userEmail.password,(err,result)=>{
        if(result){
            let token=jwt.sign({email},'sanjana')
            res.cookie('token',token)
            res.send('you are loged in')
        } else {
            console.log('Error:',err)
            res.send('somthing went wrong')}
    })
    

    

}

module.exports.logoutController=(req,res)=>{
    res.cookie('token','')
    res.redirect('/')
}