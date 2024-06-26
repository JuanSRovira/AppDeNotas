const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler (async(req, res, next) =>{
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //obtener el token
            token = req.headers.authorization.split(' ')[1]
            //verificamos la firma del token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //obtener los datos de usuario
            req.user = await User.findById(decoded.id).select('-password') 
            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('acceso no autorizado')
        }
    } 
    if (!token) {
        res.status(401)
        throw new Error('Acceso no autorizado, no se proporciono un token')
    }
})

module.exports = { protect }

0, 1