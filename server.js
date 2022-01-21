// 1) Realizar un proyecto en node.js que utilize el middlewere express e implemente los siguientes endpoints en el puerto 8080

const express = require('express')
const fs = require("fs")

const app = express()

const PORT = 8080

const db = fs.readFileSync("productos.json")

const server = app.listen(PORT, ()=> {

})

// // a) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
// function getProducts() {
    
// app.get('/productos', (request, response) => {
//     response.send(db)
// })}

// // c) Ruta get '/producto/id'
// function getProductById() {

// app.get('/producto/:id', (request, response) => {
//     response.send(db.producto.id)
// })}

// // b) Ruta post '/producto'
// function postProduct() {
    
// app.post('/producto', (request, response) => {
//     // const body = request.body
//     // const { title, img, price} = body
//     let id = db.length + 1
//      response.send({
//         "title": "Producto 2",
//         "id": id,
//         "img": "#",
//         "price": 123
//     })
//     });
// }

