require('./config/config');
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))


const promesaDB = () => {
    return new Promise((resolve, reject) => {

    })
}

const conexionDB = async() => {
    let conexion = await mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
        if (err) throw new Error('No se pudo establecer la conexion')
        console.log('Conexion a base de datos exitosa')
    })
    return conexion
}

app.listen(process.env.PORT, () => {
    console.log('Ejecutando en el puerto:', process.env.PORT);
})

conexionDB()
    .then(res => console.log(res))
    .catch(e => console.log(e))