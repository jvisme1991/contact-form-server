require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/submit-form', async (req, res) => {
    const { name, email, phone, package, message } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    // Configure the Nodemailer transport for Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send email to yourself or any other destination
        subject: 'New Service Request',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Package: ${package}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Thank you for your submission!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('There was an error processing your request.');
    }
});

module.exports = app;
