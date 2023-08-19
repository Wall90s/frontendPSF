const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://wall:tZtSXIXAQrvKm3OI@appdb.rw5ogbw.mongodb.net/?retryWrites=true&w=majority'
const Pagamento = require('./models/pagamento')

app.use(express.json())

app.get('/pagamentos', async (req, res) => {
    try {
        let pagamentos = await Pagamento.find()
        return res.status(200).json(pagamentos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.get('/saldo-consolidado', async (req, res) => {
    try {
        let dataReferencia = req.query.data
        let pagamentos = await Pagamento.find({dataPagamento: dataReferencia})

        let lucroDoDia = 0

        for (const pagamento of pagamentos) {
            lucroDoDia += pagamento.valorPagamento
        }

        return res.status(200).json({lucroDoDia, pagamentos})
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/pagamentos', async (req, res) => {
    let pagamento = { ...req.body }

    try {
        await Pagamento.create(pagamento)
        return res.status(201).json(pagamento)
    } catch (error) {
        return res.status(500).json(error)
    }
})

mongoose.connect(connectionString, {
    dbName: 'DevsSupermarket'
}).then(() => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})