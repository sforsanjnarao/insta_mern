const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()
const path=require('path')
const router=require('./routes/user.routes')
const connectDB=require('./config/db')

connectDB()

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())
app.use('/',router)


module.exports=app