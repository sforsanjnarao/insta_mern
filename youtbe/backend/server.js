//we gonna start the server of http

import app from './src/app.js'
import http, { createServer } from 'http';
import config from './src/config/config.js';
import connectDb from './src/db/db.js'

const server=http.createServer(app)


connectDb()

const port=config.PORT;

server.listen(port,()=>{
    console.log(`server is on the run ${port}`)
})
