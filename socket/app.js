const express=require('express');
const app=express()
const http = require('http');
const { disconnect } = require('process');
const socketIo=require('socket.io')


const server=http.createServer(app)
const io=socketIo(server);

app.set('view engine','ejs')
app.use(express.json());



io.on('connection',(socket)=>{
    // console.log(socket.id);
    console.log('connect')
     

    socket.on('somemessage',(data)=>{
        console.log(data)
        io.emit('value',data)
    })
     
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
    
})


app.get('/',(req,res)=>{
    res.render('index')
})
server.listen(3000)
