const express = require('express')
const culturalbites = require('../Models/Culturalbites')

const CulturalbitesController = async(req, res) =>{
  const  { name, email, phoneNumber } = req.body
    try {
        const result = await culturalbites({
            name:name,
            email: email,
            phoneNumber: phoneNumber,
            message:message
        })
        const response = await result.save()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json("Invalid Credential")
    }
}

module.exports = CulturalbitesController