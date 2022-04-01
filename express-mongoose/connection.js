const mongoose = require('mongoose')

//connection URL
const databaseURL = 'mongodb+srv://meron:meron123@initdatabase.muy0v.mongodb.net/mercato?retryWrites=true&w=majority'

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