import express from 'express'
import morgan from 'morgan'
const app=express();


app.use(morgan('dev'))

app.get('/',(req,res)=>{
    try{
        res.send('hello world')
    }catch(err){
        console.error('ERROR:',err)
    }
    
})



export default app;