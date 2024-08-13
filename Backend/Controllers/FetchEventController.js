const express = require('express')
const EventAddModel = require('../Models/EventAddModel')
const FetchEventController = async(req,res)=>{
    try {
        const result = await EventAddModel.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:`Invalid Credentails ${error}`})
    }
}
module.exports = FetchEventController