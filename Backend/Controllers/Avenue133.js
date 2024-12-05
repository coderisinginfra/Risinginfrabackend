const express = require('express')
const Avenue133Model = require('../Models/Avenue133Models')

const Avenue133 = async(req,res)=>{
    const { name,phoneNumber,email } = req.body
    try {
        const result = await Avenue133Model.create({
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
module.exports = Avenue133