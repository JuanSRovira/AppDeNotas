const mongoose = require ('mongoose')

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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