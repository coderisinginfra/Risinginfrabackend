const express = require('express');
const ApplyNowModel = require('../Models/ApplyNowModel');
const cloudinary = require('../Helpers/Cloudinary');
const upload = require('../Middleware/Multer');

const ApplyNowController = async (req, res) => {
    const { name, email, phoneNumber, categoriesd } = req.body;
    
    if (!req.file) {
        return res.status(400).json({ Message: "No file uploaded" });
    }

    try {
        const responses = await ApplyNowModel.findOne({email:email})
        if(!responses){
            const uploadResult = await cloudinary.uploader.upload(req.file.path);

        const response = await ApplyNowModel.create({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            categoriesd: categoriesd,
            files: uploadResult.url
        });

        res.status(201).json(response);
        console.log("You have Already Applied for job ")
        }else{
            res.status(400).json({ Message: "Failed to upload file" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ Message: "Internal Server Error" });
    }
};

module.exports = ApplyNowController;
