const express = require('express')
const PopupModel  = require('../Models/PopupModel')
const FetchPopupController = async(req,res)=>{
    try {
        const result = await PopupModel.find()
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchPopupController