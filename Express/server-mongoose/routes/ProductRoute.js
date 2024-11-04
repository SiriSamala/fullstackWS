const express = require('express')
const Products=require('../models/Productsmodel')

const router = express.Router()

router.get('/all',async(req,res)=>{
    try{
        const products = await Products.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message:error})
    }
})

// GET - READ 
// POST - CREATE 
// PUT - UPDATE 
// DELETE - DELETE