

const {getProducts, getProductById, postProduct, app} = require('server.js')

//getProducts();
//getProductById();
//postProduct();


// a) Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor

    
    app.get('/productos', (request, response) => {
        response.send(db)
    })
    
    // c) Ruta get '/producto/id'
    
    
    app.get('/producto/:id', (request, response) => {
        response.send(db.producto.id)
    })
    
    // b) Ruta post '/producto'
    
        
    app.post('/producto', (request, response) => {
        // const body = request.body
        // const { title, img, price} = body
        let id = db.length + 1
         response.send({
            "title": "Producto 2",
            "id": id,
            "img": "#",
            "price": 123
        })
        });
    