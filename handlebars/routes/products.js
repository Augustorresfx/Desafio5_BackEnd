const { Router } = require ('express')
const router = Router()
const Products = require ('../models/Products')
const productModel = new Products()


router.post('/productos',async (req, res) => {
    await productModel.add(req.body)
    res.redirect('/')
})

module.exports = router