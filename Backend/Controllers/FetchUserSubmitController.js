const express = require('express')
const UserSubmitModel = require('../Models/UserSubmitModel')
const FetchUserSubmitController = async(req,res)=>{
   try {
    const result = await UserSubmitModel.find()
    res.status(201).json(result)
   } catch (error) {
    res.status(500).json({message:"invalid Credentials"})
   }
}
module.exports = FetchUserSubmitController