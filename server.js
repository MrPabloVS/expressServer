const express = require('express')
const fs = require("fs")

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express()

const PORT = 8080

const db = fs.readFileSync("../productos.json")

const server = app.listen(PORT, ()=> {

})

app.get('/productos', (request, response) => {
    response.send(db)
})

app.get('/producto/id', (request, response) => {
    response.send(db.producto.id)
})

app.post('/producto', (request, response) => {
    const body = request.body
    const {id, title, img, price} = body
    let hashId = ""
    bcrypt.hash(id, saltRounds, function(err, hash) {
        hashId = hash
    });

    response.send({
        hashId,
        title,
        img,
        price,
    })

})

