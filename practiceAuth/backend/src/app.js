const express=require('express')
const router = require('./routes/user.router')
const cookieParser = require('cookie-parser')

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser())


app.use('/',router)


module.exports=app