const express =  require ('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000 // Esto especifica el puerto de servidor local
const app = express() //Especifica la naturaleza de nuestra aplicacion

app.use('/api/tareas', require('../routes/tareas.routes'))

app.listen(port, () => console.log(`Esta aplicacion corre en el puerto ${port}`))
