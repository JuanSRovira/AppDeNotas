const express = require ('express')
const router = express.Router()
const {registerUser, loginUser, datosUser} = require ('../controllers/registerControllers')


router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/datos', datosUser)

module.exports = router