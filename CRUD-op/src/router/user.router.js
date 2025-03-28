const express=require('express');
const router= express.Router();

router.post('/craete',(req,res)=>{
    
    res.send('User created successfully')
})

module.exports = router