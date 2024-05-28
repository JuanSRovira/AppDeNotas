const express =  require ('express')
const router = express.Router()
const {getTareas, createTarea,  updateTarea, deleteTarea} = require('../controllers/tareasControllers')

//Obtener tarea
router.get('/', getTareas)

//Crear tarea
router.post('/', createTarea)

//actualizar tarea
router.put('/:id', updateTarea)

//Borrar tarea
router.delete('/:id', deleteTarea)


module.exports = router 