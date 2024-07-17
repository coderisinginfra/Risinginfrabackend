const express = require('express');
const Careers = require('../Models/Careers');

const FetchJobCategoryController = async (req, res) => {
    try {
        // Aggregate pipeline to get categories and their counts
        const categories = await Careers.aggregate([
            {
                $group: {
                    _id: { $ifNull: ['$categoriesd', 'Sales'] }, // Group by category; if category is null, use 'Unknown'
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    categoriesd: '$_id', // Rename _id to categories
                    count: 1
                }
            }
        ]);

        // Send response with the aggregated categories
        res.status(200).json(categories);
    } catch (error) {
        // Handle errors gracefully
        console.error('Error fetching job categories:', error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = FetchJobCategoryController;
