const express = require("express");

const app = express();


const port = 5000;

app.get("/new",(req,res)=>{
    return res.send("helloo there");
})
app.get("/login",(req,res)=>{
    return res.send("login");
})
app.get("/pawan",(req,res)=>{
    return res.send("pawan");
})
app.listen(port,()=>{
    console.log("Server is running...")
})
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })