const express =  require ('express')
const router = express.Router()
const {getTareas, createTarea,  updateTarea, deleteTarea} = require('../controllers/tareasControllers')
const {protect} = require ('../middlewares/authMiddleware')

//Obtener tarea
router.get('/', protect, getTareas)

//Crear tarea
router.post('/', protect, createTarea)

//actualizar tarea
router.put('/:id', protect, updateTarea)

//Borrar tarea
router.delete('/:id', protect, deleteTarea)


module.exports = router 