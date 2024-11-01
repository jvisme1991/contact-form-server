const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, package, message } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    console.log('Form Submission:', { name, email, phone, package, message });

    res.send('Thank you for your submission!');
});

// Export the handler
module.exports = app;
