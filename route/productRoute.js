const {getProduct, postProduct, putProduct, deleteProduct} = require('../controller/productController')

const route = require('express').Router();

route.get('/',getProduct)

route.post('/',postProduct)

route.put('/:id',putProduct)

route.delete('/:id',deleteProduct)

route.get('/home',(req, res)=>{
    res.send("Product delivery successfull")
})

module.exports = route