const express=require('express')
const app=express()
const router=require('./routes/users.router')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',router)

module.exports=app
