const express = require('express')
const BlogModel =  require('../Models/BlogModel')
const cloudinary = require('../Helpers/Cloudinary');
const upload = require('../Middleware/Multer');
const BlogController = async(req,res)=>{
    const {postTitle,description,keywords,postcontent,Category} = req.body
    try {
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        const reponse = await BlogModel.create({
            postTitle:postTitle,
            description:description,
            keywords:keywords,
            postcontent:postcontent,
            coverimage:uploadResult.url,
            Category:Category
        })
        const result = await reponse.save()
        res.status(201).json({message:"Blog Added Successfully",result})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = BlogController