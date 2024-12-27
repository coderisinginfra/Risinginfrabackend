const express = require('express')
const Delhi6Model = require('../Models/Delhi6Model')

const Delhi6Controller = async(req,res)=>{
    const { name,phoneNumber,email } = req.body
    try {
        const result = await Delhi6Model.create({
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
module.exports = Delhi6Controller