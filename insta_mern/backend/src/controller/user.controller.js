const bcrypt=require('bcrypt')
const userModel=require('../models/user.model')

module.exports.Register=async (req,res)=>{
    try{
        const {username, password, email}=req.body;
        if(!userModel|| !password || !email){
            res.status(400).json({message:'Inavalid cratentials'})
        }
        const hashPassword=await userModel.hashPassword(password);
        const IsUser= await userModel.findOne({email: email})
        if(IsUser) res.status(200).json({message:"User already registered"})

        const user=userModel.create({
            username, password:hashPassword, email
        })
        const token=user.generateToken() // why we give any parameters to the receving side to values
        return res.status(200).json({user,token})

    } catch(err){
        console.error(err)
        res.status(500).json({message:'server error'})
    }    
}

module.exports.login=async (req,res)=>{
    const {username,password}=req.body
    if(!username || !password) res.status(400).json('invalid credinatials from login')

    const user=await userModel.findOne({email})
    if(!user) res.status(404).json('User not found');

    const result= await bcrypt.compare(password , hashPassword)
    if(!result) res.status(400).json('Invalid credentials');


    const token=await user.generateToken();
    return res.status(200).json({user,token});
}

module.exports