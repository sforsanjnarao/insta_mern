const express=require('express');
const router = require('./router/user.router');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user',router)


module.exports =app