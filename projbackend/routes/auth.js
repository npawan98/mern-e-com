var express = require('express')
var router = express.Router()
const {signout,signup,signin} = require('../controllers/auth')
const { check } = require('express-validator');


//moved to auth.js(controllers)
// const signout = (req,res)=>{
//     // res.send("user signout success");
//     //sending a json response
//     res.json({
//         message: "user Signout"
//     })
// }

// router.post("/signup",signup);
router.post("/signup",[
check("name","name should be at least 3 char").isLength({min:3}),
check("email","email is required").isEmail(),
check("password","password should be at least 3 char").isLength({min:3})

],
signup);

router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password","password is required").isLength({min:1})
],signin);

router.get("/signout",signout);

module.exports = router;