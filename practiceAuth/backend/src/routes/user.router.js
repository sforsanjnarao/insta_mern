const express=require('express')
const router=express.Router()
const controller=require('../controller/user.controller')
const { AuthUser } = require('../middleware/Authuser')


router.get('/',controller.indexPage)


router.post('/register',controller.registerPage)

router.get('/profile',AuthUser,controller.profilePage)



module.exports=router