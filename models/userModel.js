const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor, teclea tu nombre, es necesario"]
    },
    email: {
        type: String,
        required: [true, "El email es necesario"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    AdminLog: {
        type: Boolean,
        default: false
    }, 
}, {
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)