// this is where we define our schema which will then show up in mongoDB
 const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
     firstName:String,
     lastName:String
 })

 module.exports = mongoose.model('User', userSchema)