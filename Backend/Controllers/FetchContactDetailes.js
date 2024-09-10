const express = require('express')
const ContactModel  = require('../Models/ContactModel') 
const FetchContactDetailes = async(req,res)=>{
    try {
        const result = await ContactModel.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchContactDetailes