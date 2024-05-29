const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel')

const getTareas = asyncHandler( async(req, res) => {

    const tareas = await Tarea.find()

    res.status(200).json(tareas)
})

const createTarea = asyncHandler( async (req, res) => {
    if(!req.body.titulo){
        res.status(400)
        throw new Error("Es necesario un texto")
    }
    
    const tarea = await Tarea.create({
        titulo: req.body.titulo,
        texto: req.body.texto
    })

    res.status(201).json(tarea)
})

const updateTarea =asyncHandler( async (req, res) => {
    res.status(201).json({
        msg: `La tarea con el id ${req.params.id} se ha actualizado`
    })
})

const deleteTarea =asyncHandler( async (req, res) => {
    res.status(201).json({
        msg: `La tarea con el id ${req.params.id} se ha eliminado`
    })
})

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}