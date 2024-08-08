const express = require('express')
const Nayaashiyana = require('../Models/Nayaashiyana')
const NayaashiyanaController = async(req,res)=>{
    const {name,email,phoneNumber} = req.body
    try {
     const result = await Nayaashiyana.create({
        name:name,
        email:email,
        phoneNumber:phoneNumber
     }) 
     const response = await result.save()
     res.status(201).json(response) 
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }

}

module.exports = NayaashiyanaController