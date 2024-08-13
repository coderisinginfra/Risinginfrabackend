const express = require('express')
const EventAddModel = require('../Models/EventAddModel')
const cloudinary = require('../Helpers/Cloudinary');
const upload = require('../Middleware/Multer');
const EventAddController = async(req,res)=>{
    const {title,eventDate,eventsdescription} = req.body
    try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        const response = await EventAddModel.create({
            title:title,
            eventDate:eventDate,
            eventsdescription:eventsdescription,
            eventLinks:uploadResult.url
        })
        const result = await response.save()
        res.status(201).json({message:`Event Add Successfully ${result}`})
    } catch (error) {
        res.status(500).json({message:"invalid credential"})
    }
}
module.exports = EventAddController