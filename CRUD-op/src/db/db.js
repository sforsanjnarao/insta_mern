const mongoose = require('mongoose');


const connect=()=>{
    mongoose.connect('mongodb://localhost:27017/CURD-op' )
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error))

}

module.exports = connect;
