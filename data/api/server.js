const express = require("express")
const server = express()
server.use(express.json())

const Celebs = require('./celebs/celebs-model')

server.get('/', (req,res)=>{
    res.status(200).json({message: "it's working"})
})

server.get('/celebs', (req, res, next)=>{
    Celebs.getAll()
        .then(celeb => {
            res.status(200).json(celeb)
        })
        .catch(next)
})

server.get('/celebs/:id', (req, res, next)=>{
    Celebs.getByID(req.params.id)
        .then(celeb => {
            res.status(200).json(celeb)
        })
        .catch(next)
})
server.post('/celebs', (req, res, next)=>{
    Celebs.make(req.body)
        .then(celeb => {
            res.status(201).json(celeb)
        })
        .catch(next)
})

server.use((err, req, res, next) => { // eslint-disable-line

    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server