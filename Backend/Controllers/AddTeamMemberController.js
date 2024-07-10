const express = require('express')
const TeamManagement = require('../Models/TeamManagement')
const cloudinary = require('../Helpers/Cloudinary');
const upload = require('../Middleware/Multer');
const AddTeamMemberController = async(req,res)=>{
    const {name,linkedin,designation,description,collegename,timecollege,degree,workexpreincetime} = req.body
    try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        const reponse = await TeamManagement.create({
           name:name,
           linkedin:linkedin,
           designation:designation,
           description:description,
           collegename:collegename,
           timecollege:timecollege,
           degree:degree,
           workexpreincetime:workexpreincetime,
           coverimage:uploadResult.url,
        })
        const result = await reponse.save()
        res.status(201).json({message:"Blog Added Successfully",result})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = AddTeamMemberController