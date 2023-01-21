const bcrypt = require('bcrypt');
const User = require("../../model/user/userModel")

const userSignupCtrl=(async(req,res)=>{
    try {
        // console.log(req.body);
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
        let userData=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            userName:req.body.userName,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
        })
        res.json({userData,status:true,message:'Registration successful'})
    } catch (error) { 
        res.json(error)
    }
})


module.exports={userSignupCtrl} 