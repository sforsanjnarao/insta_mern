const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        // unique:true,
        // minlength:[3,'username must have min 3 character'],
        // maxlength:[20,'"Username must be at most 20 characters long"'],
        // trim:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        // minlength:[7,'email must have min 7 character'],
        // maxlength:[20,'email must be at most 20 characters long'],
        // trim:true 
    },
    profileImage:{
        type:String,
        default: "https://imgs.search.brave.com/X7XPq0yunGvlrkH7gP12GzAcbLpgJ9-xhHWwA9RtyRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc"
    },
    password:{
        type:String
    }

})

module.exports=mongoose.model('user',userSchema)