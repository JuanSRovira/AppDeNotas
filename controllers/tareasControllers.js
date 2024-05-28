const getTareas = (req, res) => {
    res.status(200).json({
        msg: "Obtener tareas"
 })
}

const createTarea = (req, res) => {
    res.status(200).json({
        msg: "Tarea creada"
 })
}

const updateTarea = (req, res) => {
    res.status(201).json({
        msg: `La tarea con el id ${req.params.id} se ha actualizado`
    })
}

const deleteTarea = (req, res) => {
    res.status(201).json({
        msg: `La tarea con el id ${req.params.id} se ha eliminado`
    })
}

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}