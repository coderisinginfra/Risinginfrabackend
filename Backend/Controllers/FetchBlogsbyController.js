const express = require('express');
const BlogModel = require('../Models/BlogModel');

const FetchBlogsbyController = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await BlogModel.findById(id);
        if (!response) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Invalid Credentials" });
    }
};

module.exports = FetchBlogsbyController;
