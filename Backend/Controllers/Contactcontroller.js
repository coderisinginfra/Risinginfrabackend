const express = require('express')
const ContactModel = require('../Models/ContactModel')
const nodemailer = require('nodemailer');
const Contactcontroller = async(req,res)=>{
    const {name,email,contact,message} = req.body
    try {   
        const result = await ContactModel.create({
            name:name,
            email:email,
            contact: contact,
            message:message
        })
        const response = await result.save()
        res.status(201).json({message:"contact us"})

    } catch (error) {
        res.status(500).json({message:"Invalid Credential"})
    }
}

module.exports = Contactcontroller