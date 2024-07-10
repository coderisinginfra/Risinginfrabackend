const express = require('express');
const BlogModel = require('../Models/BlogModel');

const CategoryFindController = async (req, res) => {
    try {
        const categories = await BlogModel.aggregate([
            {
                $group: {
                    _id: '$Category',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: '$_id',
                    count: 1
                }
            }
        ]);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = CategoryFindController;
