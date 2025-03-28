const mongoose = require('mongoose')

const connectDb=()=>{
    mongoose.connect('mongodb://localhost:27017/practice')
   .then(() => console.log('Database connected'))
   .catch(error => console.error(error))
}

module.exports=connectDb