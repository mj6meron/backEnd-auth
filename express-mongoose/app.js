const express = require('express')
const app = express()
const PORT = process.env.PORT || 1330
const User = require('./User')
const connection = require('./connection')


// Connection
connection()

// middleware 
app.use(express.json())   // lets us work with JSON in the backend and frontend

// post request
app.post('/user', (req, res)=>{
    const data = new User(req.body)
    data.save()
    .then(user=>{
        console.log('user saved', user)
        console.log('-------------------')
        res.json({
            success:true,
            user
        })
    })
})


app.listen(PORT, ()=>{
    console.log("App be running on port ", PORT)
})