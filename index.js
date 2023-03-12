const express = require("express")
const app = express()
const User = require('./model')
const mongoose = require('mongoose')
app.use(express.json())

mongoose.connect('mongodb+srv://ankitjarwall:<ankit2002>@database.lxk1au5.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("database is connected")
    })


app.get("/", (req, res) => {
    res.send("Check message...")
})


app.listen(5000, () => {
    console.log("sever is running on localhost:5000")
})
