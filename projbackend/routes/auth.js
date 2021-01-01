var express = require('express')
var router = express.Router()
const {signout,signup} = require('../controllers/auth')

//moved to auth.js(controllers)
// const signout = (req,res)=>{
//     // res.send("user signout success");
//     //sending a json response
//     res.json({
//         message: "user Signout"
//     })
// }
router.post("/signup",signup)
router.get("/signout",signout);

module.exports = router;