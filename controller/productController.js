const Product = require('../model/product');
const bcrypt = require("bcrypt") 
// const jwt = require('jsonwebtoken')

//get
exports.getProduct = async (req, res) => {
    try{
        const data = await Product.find();
        return res.json({errors: false, data: data})

    }catch (error) {
        return res.status(400).json({ errors: true, message: error.message });

    }
}

//post

exports.postProduct = async (req, res) => {
    try {
       const newProduct = new Product(req.body)
       const data = await newProduct.save();
       return res.json({ error:false, data: data })

    }catch (error){
        return res.status(400).json({ errors: true, message: error.message});
    }
}

//put
exports.putProduct = async (req, res) => {
 try{
    const id = req.params.id;
    const data = await Product.findByIdAndUpdate(id,req.body,{new:true})
    return res.json({errors:false, data:data})
 }catch (error) {
    return res.status(400).json({errors:true, message: error.message})
 }
}

//delete
exports.deleteProduct = async (req, res) => {
    try{
        const data = await Product.findByIdAndDelete(id)
        return res.json({ errors:false, data:data })

    }catch (error) {
        return res.status(400).json({errors: true, message: error.message});
    }
}