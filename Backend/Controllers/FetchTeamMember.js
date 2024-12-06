const express = require('express');
const TeamManagement = require('../Models/TeamManagement');

const FetchTeamMember = async (req, res) => {
    try {
        // Define the hierarchy in the required order
        const designationOrder = [
            "Founder and CEO",
            "Director",
            "Assistent Director",
            "GM Sales",
            "Additional Director",
            "Director Of Marketing",
            "SR. HR Manager",
            "HR Manager",
            "Software Developer",
            "Graphic Designer",
            "Leasing Head",
            "Sales Manager",
            "Senior Sales Manager",
        ];

        // Fetch all team members
        const response = await TeamManagement.find();

        // Sort the team members based on the predefined hierarchy
        const sortedResponse = response.sort((a, b) => {
            const indexA = designationOrder.indexOf(a.designation);
            const indexB = designationOrder.indexOf(b.designation);

            // If the designation is not found, it will get a high index (push to the end)
            const rankA = indexA === -1 ? designationOrder.length : indexA;
            const rankB = indexB === -1 ? designationOrder.length : indexB;

            return rankA - rankB;
        });

        res.status(200).json(sortedResponse);
    } catch (error) {
        res.status(500).json({ message: "Invalid Credentials" });
    }
};

module.exports = FetchTeamMember;
