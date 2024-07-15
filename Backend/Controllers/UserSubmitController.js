const express = require('express');
const UserSubmitModel = require('../Models/UserSubmitModel');
const twilio = require('twilio');
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.SECRET_ID;

const UserSubmitController = async (req, res) => {
    try {
        const { name, email, phoneNumber } = req.body;
        const response = await UserSubmitModel.findOne({ email });

        if (!response) {
            const result = await UserSubmitModel.create({
                name: name,
                email: email,
                phoneNumber: phoneNumber
            });

            const client = twilio(accountSid, authToken);

            client.messages
                .create({
                    body: `Name: ${name}, Phone Number: ${phoneNumber}, Email: ${email}`,
                    from: 'whatsapp:+14155238886', // Twilio WhatsApp number
                    to: 'whatsapp:+918467098755' // Recipient's WhatsApp number
                })
                .then(message => console.log(message.sid))
                .catch(error => console.error('Error sending message:', error));

            const data = await result.save();
            res.status(201).json(data);
        } else {
            res.status(200).json({ message: 'User Already Submitted The Form' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = UserSubmitController;
