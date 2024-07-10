const express = require('express')
const ApplyNowModel = require('../Models/ApplyNowModel')
const FetchResumecontroller = async(req,res) =>{
    try {
       const response = await ApplyNowModel.find()
       res.status(200).json(response) 
    } catch (error) {
        res.status(500).json({message:"Invalid Credentials"})
    }
}
module.exports = FetchResumecontroller