// 1) Realizar un proyecto en node.js que utilize el middlewere express e implemente los siguientes endpoints en el puerto 8080

const express = require('express')
const fs = require("fs")

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express()

const PORT = 8080

const db = fs.readFileSync("productos.json")

const server = app.listen(PORT, ()=> {

})

// a) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
app.get('/productos', (request, response) => {
    response.send(db)
})

// c) Ruta get '/producto/id'
app.get('/producto/id', (request, response) => {
    response.send(db.producto.id)
})

// b) Ruta post '/producto'
app.post('/producto', (request, response) => {
    const body = request.body
    const { title, img, price} = body
    let hashId = ""
    bcrypt.hash(db.length + 1, saltRounds, function(err, hash) {
        hashId = hash
    });

    response.send({
        hashId,
        title,
        img,
        price,
    })

})

