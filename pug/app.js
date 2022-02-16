const express = require('express')
const path = require('path')
const app = express()

const pugEngine = require ('./engine/ejs')

const pugRouter = require('./routes/index')
const newRouter = require('./routes/new')
const PORT = process.env.PORT || 8080
pugEngine(app)

app.use(express.json())
app.use(express.urlencoded({ exntended: true }))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/productos', pugRouter)
app.use('/', newRouter)

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))