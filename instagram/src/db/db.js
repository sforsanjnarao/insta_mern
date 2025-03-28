const { default: mongoose } = require("mongoose");

const connect=()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/instagram')
        console.log('connected to mongoDB')
    } catch(err){
        consolr.err('Error:',err)
        process.exit(1)
    }
} 
     


module.exports=connect



