const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// middleware
// required to use req.body later on
app.use(bodyParser.urlencoded({ extended: true }))


const menuRoute = require('./routes/menuRoute')
app.use('/menu', menuRoute)

app.listen(4000, ()=>{
    console.log("Server Started at port 4000")
})