const express = require('express')


// Routers
const {productosRouter} = require('./router/productoRouter.js')
const {carritosRouter} = require('./router/carritoRouter')

// Intancis de Servidor 
const app = express()




// Configuracion del servidor 

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/productos/', productosRouter)
app.use('/api/carrito/', carritosRouter)


module.exports = app