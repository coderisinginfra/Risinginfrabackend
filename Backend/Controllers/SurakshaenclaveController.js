const express = require('express')
const surakshaenclaveModel = require('../Models/surakshaenclaveModel')

const surakshaenclaveController = async(req,res)=>{
    const { name,phoneNumber,email } = req.body
    try {
        const result = await surakshaenclaveModel.create({
            name:name,
            phoneNumber:phoneNumber,
            email:email
        })
        const response = await result.save()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message:"invalid credentials"})
    }
}
module.exports = surakshaenclaveController