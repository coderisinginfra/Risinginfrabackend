const express = require('express')
const BhutaniModel = require('../Models/BhutaniModel')

const BhutaniController = async(req,res) =>{
    const {name,PhoneNumber, Email, message} = req.body
    try {
        const response = await BhutaniModel.create({
            name:name,
            PhoneNumber:PhoneNumber,
            Email:Email,
            message:message
        })
        const result = await response.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Creadential"})
    }
}
module.exports = BhutaniController