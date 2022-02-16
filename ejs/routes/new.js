const path = require('path')
const { Router } = require('express')
const Products = require ('../models/Products')

const router = Router()
const productModel = new Products()

router.get('/', (req, res) =>{
    res.render('new')
})

router.post('/productos', async (req, res) =>{
    await productModel.add(req.body)
    res.redirect('/')
})

module.exports = router