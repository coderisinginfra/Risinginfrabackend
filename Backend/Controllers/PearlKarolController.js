const express = require('express')
const PearlKarolBagh = require('../Models/PearlKarolBagh')

const PearlKarolController = async(req,res)=>{
    const { name,phoneNumber,email } = req.body
    try {
        const result = await PearlKarolBagh.create({
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
module.exports = PearlKarolController