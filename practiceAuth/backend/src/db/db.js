const mongoose=require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/practices')
    .then(() => {
        console.log('Database connected successfully');
    }).catch((error) => {
        console.error('Database connection error:', error);
    });
}

module.exports = { connect };

