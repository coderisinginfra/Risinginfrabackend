const express = require('express')
const Nayaashiyana = require('../Models/Nayaashiyana')
const FetchNayaashiyanaController = async(req,res)=>{
    try {
        const result = await Nayaashiyana.find()
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchNayaashiyanaController