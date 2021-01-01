const User = require("../models/user")

exports.signup =(req,res) =>{
    // console.log("REQ BODY",req.body);
    // res.json({
    //     message:"signup route works!!"
    // })
    const user = new User(req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"NOT able to save user"
            })
        }
        res.json(user)
    })

}


exports.signout = (req,res)=>{
    res.json({
        message: "user Signout"
    })
}