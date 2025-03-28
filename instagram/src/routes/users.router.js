const express=require('express')
const { homeController, registerController, loginController } = require('../controller/user.controller')
const router=express.Router()

router.get('/',homeController)
router.post('/register',registerController)

router.post('/login',loginController)

module.exports=router
