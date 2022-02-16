const path = require('path')
const { Router } = require('express')
const Products = require ('../models/Products')

const router = Router()
const productModel = new Products()

router.get('/', async (req, res) =>{
    const products = await productModel.getAll()
    res.render('index', {products})
})

module.exports = router