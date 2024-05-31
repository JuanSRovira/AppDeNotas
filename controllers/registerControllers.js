//registrar un usuario nuevo
const registerUser = (req, res) => {
    res.status(201).json({
        msg: "usuario creado"
    })
}
//usuario ya existente
const loginUser = (req, res) => {
    res.status(201).json({
        msg: "usuario logeado"
    })
}
//mostrar los datos del usuario
const datosUser = (req, res) => {
    res.status(201).json({
        msg: "datos del usuario"
    })
}

module.exports = {
    registerUser,
    loginUser,
    datosUser
}