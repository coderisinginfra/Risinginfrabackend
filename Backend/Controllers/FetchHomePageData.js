const express = require("express");
const AddProject = require("../Models/AddProject");

const FetchHomePageData = async (req, res) => {
    const { city, category } = req.query;

    // Construct the query object dynamically
    let query = {};
    if (city) query.city = city;
    if (category) query.category = category;

    try {
        const response = await AddProject.find(query);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = FetchHomePageData;
