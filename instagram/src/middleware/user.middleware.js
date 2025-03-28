const jwt=require('jsonwebtoken')

module.exports.authUser=(req,res,next)=>{
    if(res.cookie.token==='') res.status(400).json('you must login')
        else{
            let decode=jwt.verify(token,'sanjana')
            
        }
}