const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.cookie('name','sanjana')
})

app.listen(3000,()=>{
    console.log('we are tracking your move, be scared')
})