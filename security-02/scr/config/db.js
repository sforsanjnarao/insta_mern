const mongoose=require('mongoose')

const mongoDB=async ()=>{
    try{
    await mongoose.connect('mongodb://localhost:27017/security-2')
    console.log('mongobd connected sucessfuly')

    } catch(err){ 
        console.error('mongodb connection Error:', err)
        process.exit(1) //Exit processs with failure
    }
}
module.exports=mongoDB