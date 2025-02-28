const mongoose=require('mongoose')
const config = require('../config/config')

const connectDatabase=async ()=>{
    try{
    await mongoose.connect(config.MONGO_URL)
    console.log('dataBase connected')
    }
    catch (err){
        console.error("Error connecting:", err)
    }
}
module.exports=connectDatabase;