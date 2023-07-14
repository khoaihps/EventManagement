require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose")

// express app
const app = express()

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT)  
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)  
        })
    })
    .catch((error) => {
        console.log(error)
    })
//   useNewUrlParser: true,
//   useUnifiedTopology: true,

