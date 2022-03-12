require('./config/config');
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('get')
})

app.post('/', function(req, res) {
    let body = req.body
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        })
    } else {
        res.json({
            persona: body
        })
    }

})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    res.json({
        id
    })
})

app.delete('/', function(req, res) {
    res.json('delete')
})
app.listen(process.env.PORT, () => {
    console.log('Ejecutando en el puerto:', process.env.PORT);
})