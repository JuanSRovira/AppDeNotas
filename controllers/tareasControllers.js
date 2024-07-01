const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel')

const getTareas = asyncHandler( async(req, res) => {

    const tareas = await Tarea.find({user: req.user._id})

    res.status(200).json(tareas)
})

const createTarea = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error("Es necesario un texto")
    }
    
    const tarea = await Tarea.create({
        texto: req.body.texto,
        user: req.user._id
    })

    res.status(201).json(tarea)
})

const updateTarea =asyncHandler( async (req, res) => {
    
        const tarea = await Tarea.findById(req.params.id)

    //verificar que la tarea exista
    if(!tarea) {
        res.status(400)
        throw new Error("La tarea no fue encontrada")
    }
    //verificamos que el usuario le pertenece al token proporcionado
    if(tarea.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error ('Acceso no autorizado')
    } else {
        const updateTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})
    
        res.status(200).json(updateTarea)
        res.status(201).json({
            msg: `La tarea con el id ${req.params.id} se ha actualizado`
        })
    }

})

const deleteTarea =asyncHandler( async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)
    //Verificar si la tarea existe
    if(!tarea) {
        res.status(400)
        throw new Error("La tarea no fue encontrada")
    }
    //La tarea pertenece al usuario:
    if(tarea.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error ('Acceso no autorizado')
    } else {
                //BORRADO LOGICO
        //const deleteTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})
        //BORRADO TOTAL

        await Tarea.deleteOne(tarea)
    
        res.status(200).json({ id: req.params.id})        
    }
})

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}