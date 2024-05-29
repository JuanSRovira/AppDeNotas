const express =  require ('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('../middlewares/errorMiddleware')
const colors = require ('colors')
const connectDB = require('../config/bd')

connectDB()

const port = process.env.PORT || 5000 // Esto especifica el puerto de servidor local

const app = express() //Especifica la naturaleza de nuestra aplicacion

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/tareas', require('../routes/tareas.routes'))
app.use(errorHandler)


app.listen(port, () => console.log(`Esta aplicacion corre en el puerto ${port}`))
