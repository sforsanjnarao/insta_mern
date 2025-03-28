const express=require('express');
const app=express();
const userRouter=require('../src/routes/user.routes');
const connectDb = require('./db/db');
const cors = require('cors')
const dotenv=require('dotenv')

dotenv.config()



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


connectDb()

app.use('/user', userRouter)



module.exports=app;