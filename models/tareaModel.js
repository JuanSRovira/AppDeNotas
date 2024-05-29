const mongoose = require ('mongoose')

const tareaSchema = mongoose.Schema({
    titulo: {
        type: String,
    },
    texto: {
        type: String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Tarea', tareaSchema)