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

    const tarea = await Tarea.findBy(req.params.id)
    if(!tarea) {
        res.status(400)
        throw new Error("La tarea no fue encontrada")
    }

    const updateTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updateTarea)

    res.status(201).json({
        msg: `La tarea con el id ${req.params.id} se ha actualizado`
    })
})

const deleteTarea =asyncHandler( async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)
    if(!tarea) {
        res.status(400)
        throw new Error("La tarea no fue encontrada")
    }

    const deleteTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(201).json({
        msg: `La tarea con el id ${req.params.id} se ha eliminado`, deleteTarea
    })
})

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}