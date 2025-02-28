const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const config=require('../config/config')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

userSchema.methods.generateToken=function(){
    return jwt.sign({id:user._id, email:user.email},config.JWT)
}

userSchema.statics.hashpasword=async function (password){
    return await bcrypt.hash(password,10)
}
userSchema.statics.comparePasswor=async function(password){
    return await bcrypt.compare(password,this.password)
}


module.exports=mongoose.model('user',userSchema);



