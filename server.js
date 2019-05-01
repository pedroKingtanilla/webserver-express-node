const express = require('express')
const hbs = require('hbs')
const app = express()
require('./helpers/helpers')
const puerto = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs')


app.get('/', (req, res) =>{
    res.render('home',{
        nombre: 'Peter KINGTANILLA'
    })
})

app.get('/about', (req, res) =>{
    res.render('about',{
        nombre: 'Peter Kingtanilla'
    })
})

app.listen(puerto, ()=>{
    console.log(`escuchando en el puerto ${puerto}`)
})