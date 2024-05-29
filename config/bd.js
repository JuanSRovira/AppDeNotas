const mongoose = require('mongoose')


const conectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB conected: ${conn.connection.host}`.cyan.underline)
        //Errores de typo, connection es con doble n  
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectDB