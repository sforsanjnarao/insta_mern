const express=require('express')

const router=express.Router()
const {createController, loginController}=require('../controllers/user.controller')
const {logoutController}=require('../controllers/user.controller')
// const {loginController}=require('../controllers/user.controller')
const {loginGetController}=require('../controllers/user.controller')



router.get('/',(req,res)=>{
    res.render('index')
})
router.post('/register',createController)

router.get('/login',loginGetController)

router.post('/login',loginController)

router.get('/logout',logoutController)

module.exports=router