const express = require('express')
const PopupModel = require('../Models/PopupModel')
const Popupformcontroller = async(req,res)=>{
    const {name,email,contact} = req.body
    try {   
        const result = await PopupModel.create({
            name:name,
            email:email,
            contact: contact,
        })
        const response = await result.save()
        res.status(201).json({message:"contact us"})

    } catch (error) {
        res.status(500).json({message:"Invalid Credential"})
    }
}

module.exports = Popupformcontroller