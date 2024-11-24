const express = require('express')
const SurakshaModel = require('../Models/SurakshaModel')

const SurakshaController = async(req,req) =>{
    const {name,PhoneNumber, Email} = req.body
    try {
        const response = await SurakshaModel.create({
            name:name,
            PhoneNumber:PhoneNumber,
            Email:Email
        })
        const result = await response.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Creadential"})
    }
}
module.exports = SurakshaController