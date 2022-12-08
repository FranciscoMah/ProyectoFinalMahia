const express = require('express')
const { Router } = express
const ContenedorArchivo = require('../contenedores/contenerdorArchivo.js')

// router
const productosRouter = new Router()

// Servicio
const productosApi = new ContenedorArchivo()


// middleware

const {soloAdmin} = require('../middleware/athuMiddelware.js')


// Controller
productosRouter.get('/', async(req ,resp ) =>{
    const productos = await productosApi.listarAll()
    resp.json(productos)
})

productosRouter.get('/:id', async(req ,resp ) =>{
    const { id } = req.params
    const res = await productosApi.listar(id)
    resp.status(200).json({ res });
})

productosRouter.post('/', soloAdmin ,async(req ,resp ) =>{
    resp.status(200).json(await productosApi.guardar(req.body))
})

productosRouter.put('/:id', soloAdmin , async(req ,resp ) =>{
    resp.status(200).json(await productosApi.actualizar(req.body, req.params.id))
})

productosRouter.delete('/:id', soloAdmin , async(req ,resp ) =>{
    resp.status(200).json(await productosApi.borrar(req.body, req.params.id))
})


module.exports = { productosRouter : productosRouter, productosApi : productosApi}
