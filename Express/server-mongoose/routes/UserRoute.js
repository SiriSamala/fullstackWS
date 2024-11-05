const express=require('express')
const router=express.Router()
const Users=require('../models/UsersModel')

router.get('/all',async(req,res)=>{
    try{
        const users=await Users.find()
        res.status(200).json(users)
    }catch{
        res.status(500).json({message:error})
    }
})

router.post('/add',(req,res)=>{
    try{
        const UserData = new Users(req,body)
        const {name,email,phonenumber,password,address}=UserData
        if(!name || !email || !phonenumber || !password || !address){
            res.status(401).json({message:"All fields required"})
        }
        const storedata = awaitUserData.save()
        res.status(200).json(storedata)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports = router