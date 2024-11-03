const express = require('express')
const items = require('./routes/itens')


const listarItens = express.Router()

listarItens.get('/items', (req, res)=>{
    res.send(items)
})

module.exports = listarItens









