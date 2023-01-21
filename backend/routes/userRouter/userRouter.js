const express=require('express')
const { userSignupCtrl } = require('../../controller/user/userControllers')

const userRouter=express.Router()


userRouter.post('/',userSignupCtrl)


module.exports=userRouter
