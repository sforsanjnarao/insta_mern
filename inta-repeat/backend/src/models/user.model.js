const mongoose = require('mongoose')
const jwt=require('jsonwebtoken')

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
         
    },
    email: {
        type: String,
        required: true,
         
    },
    password: {
        type: String,
        required: true,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]
})

Schema.methods.generateToken=function(){
    return jwt.sign({id:this._id, email:this.email},process.env.hidden_jwt)
}

module.exports = mongoose.model('User', userSchema)