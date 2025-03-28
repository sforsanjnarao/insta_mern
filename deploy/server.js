const { Socket } = require('socket.io');
const app=require('./src/app')

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {

    socket.on('message',(data) => {
        console.log(data)

        io.emit('chat-message', data)
    }
    )
   console.log('User connected')
});
server.listen(3000,() => {console.log('app is on listen 3000')});
