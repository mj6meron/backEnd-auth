const mongoose = require('mongoose')

//connection URL
const username = "new"
const password = "new123"
const dataBasename = "mercato"

const databaseURL = `mongodb+srv://${username}:${password}@initdatabase.muy0v.mongodb.net/${dataBasename}?retryWrites=true&w=majority`

async function main(){
    console.log('we are connected to DB!')

    // Here we connect mongoose to cloud atlas server!
    mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true})

    // get the connection object
    const mgDb = mongoose.connection

    // notify on 'connected' object 
    mgDb.on('connected', console.log.bind(console, 'MongoDB & Mongoose connected!'))
}

module.exports = main
