const jwt= require('jsonwebtoken');


module.exports.authUser=async (req,res,next)=>{
    if(req.cookie.token===''){
        res.status(200).json('you must be login')
    } //checking if the router have any token in the browser

    const decode= jwt.verify(token,'sanjana') //
    if(!decode) res.status(401).json('you are not authenticated')    
    req.user=decode;
    console.log(req.user)
    next()

}

