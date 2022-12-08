const express = require('express')
const { Router } = express
const ContenedorArchivo = require('../contenedores/contenerdorArchivo.js')

// router
const carritosRouter = new Router()
const {productosApi} = require('./productoRouter.js')

// Servicio
const carritoApi = new ContenedorArchivo()


carritosRouter.post('', async (req,resp) => {
    resp.json({ id: await carritoApi.guardar({productos: []})})
})

carritosRouter.delete('/:id/producto/:idpro', async (req,resp) => {
    const carrito = await carritoApi.listar(req.params.id)
    const producto = carrito.productos.findIndex(p => p.id == req.params.idpro)
    if(producto != -1 ){
        carrito.productos.splice(producto, 1)
        await carritoApi.actualizar(carrito, req.params.id)
    }
    resp.end()
})

// carrito = {productos : []}

carritosRouter.get('', async (req,resp) => {})
carritosRouter.post('', async (req,resp) => {})
carritosRouter.delete('', async (req,resp) => {})


module.exports = {carritosRouter : carritosRouter}