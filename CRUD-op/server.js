const app=require('./src/app');
const connect = require('./src/db/db');



connect()


const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})