const User = require("../models/user")
const { check,validationResult } = require('express-validator');

exports.signup =(req,res) =>{
    // console.log("REQ BODY",req.body);
    // res.json({
    //     message:"signup route works!!"
    // })

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    const user = new User(req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"NOT able to save user"
            })
        }
        // res.json(user)
        // if we need to print only specific info 
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        })
    })

}


exports.signout = (req,res)=>{
    res.json({
        message: "user Signout"
    })
}