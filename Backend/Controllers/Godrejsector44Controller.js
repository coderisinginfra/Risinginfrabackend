const express = require('express')
const Godrejsector44Model = require('../Models/Godrejsector44Model')

const Godrejsector44Controller = async(req,res) =>{
    const {name,PhoneNumber, Email} = req.body
    try {
        const response = await Godrejsector44Model.create({
            name:name,
            PhoneNumber:PhoneNumber,
            Email:Email,
        })
        const result = await response.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Creadential"})
    }
}
module.exports = Godrejsector44Controller