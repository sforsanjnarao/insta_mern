import mongoose from "mongoose";
import config from "../config/config.js";

const dataBaseConnect=()=>{
    mongoose.connect(config.MONGOURL)
    try{
        console.log('connected to mongoDB with name instaN20')
    }catch(err){
        console.error('ERROR:', err)
    }
}

export default dataBaseConnect;