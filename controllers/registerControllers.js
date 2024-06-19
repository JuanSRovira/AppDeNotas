const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require ('express-async-handler')
const User = require ('../models/userModel')

//registrar un usuario nuevo
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('faltan datos, por favor verifica')
    }

    //El usuario existe?
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400) 
        throw new Error ('El usuario ya existe')
    } else {
        //hash password
    }

    res.status(201).json({
        msg: "usuario creado"
    })
})
//usuario ya existente
const loginUser = asyncHandler(async (req, res) => {
    res.status(201).json({
        msg: "usuario logeado"
    })
})
//mostrar los datos del usuario
const datosUser = asyncHandler(async (req, res) => {
    res.status(201).json({
        msg: "datos del usuario"
    })
})

module.exports = {
    registerUser,
    loginUser,
    datosUser
}