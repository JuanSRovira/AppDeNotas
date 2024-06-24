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
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        //crear el usuario
        const user = await User.create({
            name,
            email,
            password: hashPassword
        })

        //Chequeo si se creo el usuario
        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                admin: user.esAdmin
            })
        } else {
            res.status(400)
            throw new Error ('No se pudo crear el usuario')
        }
    }
})
//usuario ya existente
const loginUser = asyncHandler(async (req, res) => {

    const  {email, password } = req.body
    
    if (!email || !password){
        res.status(400)
        throw new Error ('faltan datos, por favor llena los campos')
    }

    //verificar si el usuario existe
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.esAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400) 
        throw new Error ('Credenciales incorrectas, por favor verifica')
    }

})
//mostrar los datos del usuario
const datosUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})
//generar un jwt
const generateToken = (id) =>{ 
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

}

module.exports = {
    registerUser,
    loginUser,
    datosUser
}