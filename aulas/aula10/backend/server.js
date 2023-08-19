const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://wall:tZtSXIXAQrvKm3OI@appdb.rw5ogbw.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    dbName: 'DevsSupermarket'
}).then(() =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
    app.listen()
}).catch((error) => {
    console.log(error)
})