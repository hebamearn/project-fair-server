const express=require('express')
const userController=require('../controller/userController')

const router = new express.Router()


//register-post
router.post('/register',userController.registerController)

module.exports=router