const express=require('express');
const app=express();
const upload = require('./utils/multer');


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.post('/upload', upload.single('file'),(req,res)=>{
    res.send('uploaded file')
  })

module.exports =app;

