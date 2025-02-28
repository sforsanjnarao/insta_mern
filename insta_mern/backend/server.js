require('dotenv').config()

const app=require('./src/app')
const config=require('./src/config/config')
const connectDatabase = require('./src/db/db')



connectDatabase()
app.listen(config.PORT,()=>{
    console.log('server is runing on port 3000')
})